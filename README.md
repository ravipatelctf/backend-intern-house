# Intern House — Backend REST API Server

This is the **backend REST API** for the **Intern House** project, built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
It provides CRUD endpoints to manage job listings and serves as the API layer for the frontend application.

## Features

- RESTful API architecture  
- MongoDB integration using Mongoose  
- Job creation and retrieval endpoints  
- Modular structure (routes, controllers, models)  
- CORS-enabled for frontend communication  

## Tech Stack

| Technology | Description |
|-------------|-------------|
| Node.js | JavaScript runtime |
| Express.js | Web framework for Node |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| CORS | Middleware for cross-origin requests |

## Folder Structure

```

backend/
│
├── db/
│   └── db.connect.js         # MongoDB connection setup
│
├── models/
│   └── job.models.js         # Job schema and model
│
├── controllers/
│   └── job.controllers.js    # Logic for handling job routes
│
├── routes/
│   └── job.routes.js         # Job API endpoints
│
├── index.js                  # Entry point (Express server)
│
├── .env                      # stores sensitive data
│
└── package.json

````

## Installation & Setup

1. **Clone the repository**

    ```bash
    git clone https://github.com/<your-username>/intern-house-backend.git
    cd intern-house-backend
    ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add:

   ```env
   PORT=4000
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Start the server**

   ```bash
   npm run dev
   ```

   The server will run at:
   `http://localhost:4000`

## API Endpoints

### Base URL

```
https://<your-deployed-backend-url>/
```

### Home Route

**GET /**
Returns a welcome message confirming that the API is running.

**Response**

```json
{
  "message": "Welcome to Intern House REST API server"
}
```

### Job Routes

#### 1. Create a Job

**POST /jobs**

**Request Body Example**

```json
{
  "jobTitle": "Senior Backend Engineer",
  "companyName": "AstraTech Labs",
  "location": "Bengaluru, India",
  "salary": 150000,
  "jobType": "Full-time (Remote)",
  "jobDescription": "Design and build scalable backend services using Node.js and MongoDB. Collaborate with product and frontend teams to ship reliable APIs and microservices.",
  "jobQualifications": "Bachelor's degree in Computer Science or equivalent. 4+ years of experience in Node.js, Express, RESTful API design, and MongoDB. Strong problem-solving skills and experience with testing and CI/CD."
}
```

**Response**

```json
{
    "message": "Job created successfully.",
    "data": {
        "jobTitle": "Senior Backend Engineer",
        "companyName": "AstraTech Labs",
        "location": "Bengaluru, India",
        "salary": 150000,
        "jobType": "Full-time (Remote)",
        "jobDescription": "Design and build scalable backend services using Node.js and MongoDB. Collaborate with product and frontend teams to ship reliable APIs and microservices.",
        "jobQualifications": "Bachelor's degree in Computer Science or equivalent. 4+ years of experience in Node.js, Express, RESTful API design, and MongoDB. Strong problem-solving skills and experience with testing and CI/CD.",
        "_id": "68f1e278a1321de532ec5654",
        "createdAt": "2025-10-17T06:30:16.597Z",
        "updatedAt": "2025-10-17T06:30:16.597Z",
        "__v": 0
    }
}
```

---

#### 2. Get All Jobs

**GET /jobs**

**Response Example**

```json
{
    "message": "Data fetched successfully",
    "data": [
        {
            "_id": "68f1e278a1321de532ec5654",
            "jobTitle": "Senior Backend Engineer",
            "companyName": "AstraTech Labs",
            "location": "Bengaluru, India",
            "salary": 150000,
            "jobType": "Full-time (Remote)",
            "jobDescription": "Design and build scalable backend services using Node.js and MongoDB. Collaborate with product and frontend teams to ship reliable APIs and microservices.",
            "jobQualifications": "Bachelor's degree in Computer Science or equivalent. 4+ years of experience in Node.js, Express, RESTful API design, and MongoDB. Strong problem-solving skills and experience with testing and CI/CD.",
            "createdAt": "2025-10-17T06:30:16.597Z",
            "updatedAt": "2025-10-17T06:30:16.597Z",
            "__v": 0
        }
    ]
}
```

### Author

For feature requests or feedbacks regarding this repository contact me at [ravipatelctf@gmail.com](https://ravipatelctf@gmail.com)
