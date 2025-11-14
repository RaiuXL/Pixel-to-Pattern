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

updating readme file