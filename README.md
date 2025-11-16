# 🎨 Pixel to Pattern  - Create your perfect piece!

**Pixel to Pattern** turns your pixel art into beautiful, beginner friendly crochet patterns stitch by stitch, row by row.  
Let the creativity flow!




## 🧶 Features

### Create  
Turn any pixel drawing into a crochet-ready pattern.  
Each row lists the stitch counts per color, e.g.:
        ( sc = single crochet)
        Row 1: 28 sc (white)
        Row 2: 9 sc (white), 10 sc (yellow), 9 sc (white)
        Row 3: 8 sc (white), 10 sc (yellow), 9 sc (white)

### Read  
Browse all submitted creations and view detailed stitch by stitch patterns.

### Update *(Coming Soon!)*  
Users will soon be able to edit their own patterns directly.

### Delete  
Remove any pattern you’ve posted with one click.




## ⚙️ Local Setup

Follow these steps to run **Pixel to Pattern** locally:

1. **Fork and clone** this repository to your machine.  
2. In the root directory, create a `.env` file named `db.env`.  
3. **Install dependencies** in both the `server/` and `pixel2pattern/` folders:
   ```bash
   npm install
   ```
4. Navigate to `server/` and start the backend:
   ```bash
   npm run dev
   ```
5. Navigate to `pixel2pattern/`
   ```bash
     npm run dev
   ```
6. Open your browser at http://localhost:3000
7. 🎨 Get creative!




## Tech Stack
- **Frontend:** NextJs, MaterialUI
- **Backend:** Node.js, Express
- **Database:** MySQL database with Sequelize used on the backend.
- **Version:** Node 24+




## Environment Variables

This project utilizes environment variables for configuration. You need to create a `db.env` file in the root directory based on the provided variable examples listed below.

   **Required Variables:**

   *   `DB_USER`: The username for the user created to run the database.
   *   `DB_PASSWORD`: Your password used to access the database.
   *   `DB_HOST`: The IP for the virtual machine running the database.
   *   `DB_DATABASE`: name of the database you need to access.
   *   `DB_PORT`: The port number the database is running on.

Edit `db.env` and replace placeholder values with your actual configuration.
Restart your development server if it's already running (e.g., npm start).


## Deployment Process
Linked below is the documentation that was created while setting up the virtual machine for deployment.
[Click Here!](https://loving-eye-8b5.notion.site/VM-Deployment-27e101a39e1480328574fee619f042d8)





🐳 Docker Setup

```bash
# Build containers
docker compose build

# Run containers in background
docker compose up -d

# Stop containers
docker compose down

# View logs for all services
docker compose logs -f
```

After running these commands, visit:

Frontend: http://localhost:3000
Backend API: http://localhost:3001/patterns

----

☁️ VM Deployment with Docker

```bash
ssh root@<VM_IP>
# Clone your repo on the VM
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>

# Start containers
docker compose up -d
```

Then open in a browser:
```
http://<VM_IP>:3000
```

----


🌿 Environment Variables for Docker

```
The Docker setup uses:
MySQL service name: db
Backend container: pixel_backend
Frontend container: pixel_frontend
Your docker-compose.yml config for the database:
```

services:
  db:
    image: mysql:8.0
    container_name: pixel_db
    restart: always
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: pixel2pattern
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - db-data:/var/lib/mysql


db.env for Docker:

```
DB_HOST=db
DB_USER=user
DB_PASSWORD=password
DB_NAME=pixel2pattern
DB_DIALECT=mysql
DB_PORT=3306
PORT=3001
```


💾 Database Volume Persistence

A Docker volume is used so MySQL data is not lost when containers restart:

```yaml
volumes:
  db-data:
```

Useful commands:

```bash
# List volumes
docker volume ls
```

# Inspect your DB volume
```bash
docker volume inspect <project-folder>_db-data
```
----

🧰 Quick Troubleshooting
Check containers and logs

docker compose ps
docker compose logs -f db
docker compose logs -f backend
docker compose logs -f frontend

Database connection issues

Make sure DB_HOST=db in db.env when using Docker.
Ensure DB_USER, DB_PASSWORD, and DB_NAME match the values in docker-compose.yml.


## 🐚 Docker Deployment Script

To automate VM provisioning and Docker-based deployment, this project includes a bash script named `deploy_docker.sh`.  
You can run this script on a **fresh Ubuntu VM** to install everything and start the app.

### ✅ What the Script Does

When you run `deploy_docker.sh`, it:

- Updates the system packages
- Installs Git
- Installs Docker and the Docker Compose plugin
- Configures Docker to start automatically on boot
- Clones the Pixel to Pattern repository from GitHub
- Builds the Docker images and starts all services with `docker compose up -d`
- Prints clear progress messages at each step so you can see what’s happening

After the script completes successfully, the application is available at:
- **Frontend:** `http://<YOUR_VM_IP>:3000`
- **Backend API:** `http://<YOUR_VM_IP>:3001/patterns`
Replace `<YOUR_VM_IP>` with the IP address of your VM.


### ▶️ How to Use `deploy_docker.sh`

1. **SSH into your Ubuntu VM:**

```bash
ssh root@<YOUR_VM_IP>
```
Place the script on the VM
If it’s in the repo already, cd into the repo first. Otherwise, create the file and paste the script contents.
Make the script executable and run it:

```bash
chmod +x deploy_docker.sh
./deploy_docker.sh
```
Verify containers are running:

```bash
docker compose ps
```
You should see the frontend, backend, and db services in the Up state.
Open the app in a browser:
http://<YOUR_VM_IP>:3000