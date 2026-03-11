# 🎬 Full Stack Movie Records

A **Full Stack Movie Records Application** built with **React + TypeScript + Node.js + Express**.
The system allows users to manage movie records with validation, modal editing, and role-based permissions.

---

# 🚀 Features

* View movie records
* Add new movies
* Edit movie information (Modal)
* Delete movies (Manager only)
* Form validation
* Confirm delete modal
* Role-based access control
* PostgreSQL database using Docker
* pgAdmin database manager

---

# 🛠 Tech Stack

### Frontend

* React
* TypeScript
* MobX
* Bootstrap

### Backend

* Node.js
* Express
* REST API

### Database

* PostgreSQL
* Docker
* pgAdmin

---

# 📌 Versions Used

| Technology | Version |
| ---------- | ------- |
| Node.js    | 20.15.0 |
| React      | 19.2.0  |
| TypeScript | 5.9.3   |
| Express    | 5.2.1   |
| PostgreSQL | 15      |
| Docker     | 24+     |
| pgAdmin    | 7       |
| Vite       | 7.3.1   |

---

# 📂 Project Structure

```
full-stack-movie-records
│
├── movie-backend
│   ├── controllers
│   ├── routes
│   ├── middleware
│   ├── models
│   └── server.js
│
├── movie-frontend
│   ├── src
│   └── package.json
│
├── database
│   ├── schema.sql
│   └── seed.sql
│
├── docker-compose.yml
└── README.md
```

---

# 📦 Installation

Clone the repository

```bash
git clone https://github.com/Suphichayamol/full-stack-movie-records.git
cd full-stack-movie-records
```

---

# 🐳 Run PostgreSQL + pgAdmin (Docker)

Make sure **Docker Desktop** is installed.

Start database containers:

```bash
docker compose up -d
```

Check running containers:

```bash
docker ps
```

Expected containers:

```
postgres
pgadmin
```

---

# 🗄 PostgreSQL Database Configuration

| Field    | Value     |
| -------- | --------- |
| Host     | localhost |
| Port     | 5432      |
| Database | movie_db  |
| Username | postgres  |
| Password | postgres  |

---

# 🖥 Access pgAdmin

Open browser

```
http://localhost:5050
```

Login

| Field    | Value                                     |
| -------- | ----------------------------------------- |
| Email    | [admin@admin.com](mailto:admin@admin.com) |
| Password | admin                                     |

---

# 🔗 Add PostgreSQL Server in pgAdmin

1. Login to pgAdmin
2. Click **Add New Server**

### General

```
Name: MovieDB
```

### Connection

```
Host name: postgres
Port: 5432
Username: postgres
Password: postgres
```

Click **Save**

---

# ▶️ Run Backend

Open terminal

```bash
cd movie-backend
npm install
node server.js
```

Backend will run at

```
http://localhost:5000
```

# ▶️ Run Frontend

Open another terminal

```bash
cd movie-frontend
npm install
npm run dev
```

Frontend will run at

```
http://localhost:5173
```

---

# 🔐 Role-Based Access Control

The system supports two roles.

| Role    | Permission             |
| ------- | ---------------------- |
| USER    | View, Add, Edit movies |
| MANAGER | Can delete movies      |


# 📋 Form Validation

Frontend validation rules include:

* Movie title required
* Year required
* Year must be 4 digits
* Year must be between **1888 and current year**
* Duplicate movie title check

Example error message

```
Movie title already exists
```

---

# 🎨 UI Features

* Responsive layout with Bootstrap
* Movie table display
* Edit movie with modal
* Confirm delete modal
* Inline validation errors

---

# 👨‍💻 Author

Developed by

**Suphichayamol**

Full Stack Developer
