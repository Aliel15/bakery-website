# 🍰 Bakery Website

![Node.js](https://img.shields.io/badge/Backend-Node.js-brightgreen?logo=node.js)
![Express.js](https://img.shields.io/badge/Framework-Express.js-lightgrey?logo=express)
![MySQL](https://img.shields.io/badge/Database-MySQL-blue?logo=mysql)
![HTML/CSS](https://img.shields.io/badge/Frontend-HTML%2FCSS-orange?logo=html5)

A full-stack **Bakery Website** built with **Node.js**, **Express.js**, and **MySQL**. This project includes static pages, a contact form, and an order form with backend routing and database integration.

---

## ✨ Features

- 🏠 Static Pages — Home, About, Contact  
- 📩 Contact Form — Saves data to MySQL  
- 🧾 Order Form — Lets users place bakery orders  
- 🔁 Backend Routing — Powered by Express.js  

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Environment Config:** dotenv  

---

## 🚀 Setup Instructions

### 📂 1. Clone the Repository

```bash
git clone https://github.com/aliel15/bakery-site.git
cd bakery-site

📦 2. Install Dependencies
bash
Copy
Edit
npm install

🗝️ 3. Create .env File
Create a .env file in the root folder with your MySQL credentials:

env
Copy
Edit
DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=bakerydb

🧱 4. Create MySQL Database & Tables
Run the following SQL commands in your MySQL server:

sql
Copy
Edit
CREATE DATABASE bakerydb;
USE bakerydb;

CREATE TABLE contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  message TEXT
);

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  item VARCHAR(100),
  quantity INT
);

▶️ 5. Start the Server
bash
Copy
Edit
node server.js
🌐 6. Open in Browser
Visit: http://localhost:5000
