<div align="center">

# 🍴 Campus Bite
### _Online Campus Food Ordering System_

🚀 A full-stack web application for campus food ordering — designed to help students and faculty order meals online, skip queues, and enjoy a smarter dining experience.



</div>

---

## 📖 Overview

**Campus Bite** is a digital food ordering solution built for university campuses.  
It connects **students**, **faculty**, and **campus vendors** on a unified platform for faster, smarter, and more convenient dining.

> _“Order food. Skip queues. Enjoy campus life.”_

---

## ✨ Key Features

### 👩‍🎓 For Users (Students & Faculty)
- 🔐 Secure login and registration  
- 🍔 Browse cafeteria menus  
- 🛒 Add items to cart and customize orders  
- 💳 Make secure payments (UPI / Card / Meal plan)  
- ⏰ Pre-order for scheduled pickup  
- 🔔 Track order status in real time  
- ⭐ Rate and review dishes  

### 🧑‍🍳 For Admins (Vendors)
- 📋 Manage menu items (add/edit/delete)  
- 📦 View and update incoming orders  
- 📊 Access reports & analytics dashboard  
- 📈 Monitor sales and popular items  

---

## 🧠 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | HTML+CSS|
| **Styling** | Tailwind CSS|
| **Routing** | React Router DOM |
| **State Management** | React Context API |
| **Backend** | Node.js + Express.js |
| **Database** | MySQL |
| **Authentication** | JSON Web Tokens (JWT) |
| **API Communication** | REST API (Axios / Fetch) |
| **Development tools**| Visual Studio ,Live server|

---

## 🏗️ System Architecture
[User Interface]
↓
Frontend
↓
Express REST API
↓
MySQL Database

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-org>/campus-bite.git
cd campus-bite
campus-bite/
│
├── backend/
│   ├── server.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── menuRoutes.js
│   │   ├── orderRoutes.js
│   ├── models/
│   │   ├── User.js
│   │   ├── MenuItem.js
│   │   ├── Order.js
│   └── config/
│       └── db.js
│
├── frontend/
│   ├── src/
│   │   ├── components/   → Navbar, Hero, FoodCard, Footer
│   │   ├── context/      → AuthContext, CartContext
│   │   ├── pages/        → Home, Menu, Cart, Checkout, Login, Admin
│   │   └── App.jsx
│   └── public/
│
└── README.md

<div align="center">
🌟 Campus Bite — Simplifying Campus Dining, One Click at a Time!

Made with ❤️ using HTML,CSS, Node.js, and MySQL

</div> ```
