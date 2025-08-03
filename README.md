# 🍰 Bakery Website

A full-stack bakery website using **Node.js**, **Express.js**, and **MySQL**.

## ✨ Features

- Static pages: Home, About, Contact
- Contact form saves data to MySQL
- Order form allows customers to place orders
- Backend routing with Express.js

## 🔧 Tech Stack

- HTML, CSS (Frontend)
- Node.js + Express (Backend)
- MySQL (Database)
- dotenv (Environment config)

## 🚀 Setup Instructions

1. Clone the repo:
   ```bash
   git clone https://github.com/aliel15/bakery-site.git
   cd bakery-site

2.install dependencies

   npm install

3. Add a Env File

   DB_HOST=localhost
DB_USER=root
DB_PASS=your_password
DB_NAME=bakerydb


4.Create My Sql tables

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


5 Starts The Server

  node server.js

6 Open In Browser 

  http://localhost:5000