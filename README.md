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
# Api Testing

1. Add School
 https://develop-node-js-apis-for-school-p4o4.onrender.com/addSchool
- Request Body
- {
  "name": "Delhi Public School",
  "address": "Noida Sector 62",
  "latitude": "28.6280",
  "longitude": "77.3649"
}
- Success Response
{
  "success": true,
  "message": "School Added Successfully"
}

2. Get List Schools
    https://develop-node-js-apis-for-school-p4o4.onrender.com/listSchools?latitude=28.608235&longitude=77.376030
- {
    "success": true,
    "count": 6,
    "data": [
     {
            "id": 5,
            "name": "GREENWAY MODERN SCHOOL",
            "address": "Delhi",
            "latitude": 28.6697,
            "longitude": 77.3086,
            "distance": "9.49 KM"
        }
    ]
}


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
