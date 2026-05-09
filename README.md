# School Management API

A REST API built using Node.js, Express.js, and MySQL for managing school data.

The API allows users to:

- Add new schools
- Validate school details
- Fetch schools sorted by nearest location
- Calculate geographical distance using latitude and longitude

---

# Tech Stack

- Node.js
- Express.js
- MySQL
- Railway (MySQL Hosting)
- Render (Backend Hosting)
- Postman (API Testing)

---

# Project Structure

```txt
school-management-api/
│
├── database/
│   └── connection.js
│
├── routes/
│   └── school.js
│
├── utils/
│   └── distance.js
│
├── validations/
│   └── validation.js
│
├── .env
├── package.json
├── server.js
└── README.md
