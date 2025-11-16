#!/bin/bash
set -e

echo "=== Pixel-to-Pattern Docker Deployment ==="

# Make apt non-interactive
export DEBIAN_FRONTEND=noninteractive

echo "[1/5] Updating system packages..."
sudo apt update -y && sudo apt upgrade -y

# Install Git if missing
if ! command -v git >/dev/null 2>&1; then
  echo "[2/5] Installing Git..."
  sudo apt install -y git
fi

# Install Docker if missing
if ! command -v docker >/dev/null 2>&1; then
  echo "[3/5] Installing Docker..."
  curl -fsSL https://get.docker.com | sudo sh
fi

echo "Enabling Docker to start on boot..."
sudo systemctl enable --now docker

# Install Docker Compose plugin if missing
if ! docker compose version >/dev/null 2>&1; then
  echo "[4/5] Installing Docker Compose plugin..."
  sudo apt install -y docker-compose-plugin
fi

# Repo settings
REPO_URL="https://github.com/RaiuXL/Pixel-to-Pattern.git"
REPO_DIR="pixel-to-pattern"

# Clone repo
if [ ! -d "$REPO_DIR/.git" ]; then
  echo "[5/5] Cloning repository from $REPO_URL ..."
  git clone "$REPO_URL" "$REPO_DIR"
fi

cd "$REPO_DIR"

echo "Pulling latest updates from main..."
git pull origin main || true

echo "Building containers..."
docker compose build

echo "Starting services (detached)..."
docker compose up -d

echo "---------------------------------------------"
echo "Deployment complete!"
echo "Frontend: http://<YOUR_VM_IP>:3000"
echo "Backend:  http://<YOUR_VM_IP>:3001/patterns"
echo "---------------------------------------------"

