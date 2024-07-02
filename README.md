# Assignment Submission: Aditya

![image](https://github.com/AdityaSen-1606/Assignment/assets/76251309/db483911-d5f0-4428-89b7-83765ba91a62)


## Project Overview

This project is completed as part of an assignment and is built using the MERN (MongoDB, Express, React, Node.js) tech stack.

## Technologies Used

- **MongoDB:** NoSQL database for storing user data.
- **Express:** Web framework for Node.js for building the server-side logic.
- **React:** Frontend library for building user interfaces.
- **Node.js:** JavaScript runtime for server-side programming.
- **CORS:** Middleware to enable Cross-Origin Resource Sharing.
- **JSON Web Token (JWT):** For authentication and securing endpoints.

## Features

- User registration and login.
- Authentication using JSON Web Tokens (JWT).
- Display of user's name upon login.
- Workspace displaying names and emails of all users.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed and running.

### Steps

1. **Clone the repository:**

   ```sh
   git clone https://github.com/AdityaSen-1606/Assignment.git
   cd Assignment
2. **Install server dependencies:**
   ```sh
   cd server
   npm install
3. **Install client dependencies:**
   ```sh
   cd ../client
   npm install
4. **Set up environment variables:**
   Create a .env file in the server directory and add the following:
   ```sh
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret

### Usage

**Running the Server**

1. Start the backend server:
   ```sh
   cd server
   npm start

2. Start the frontend development server:
   ```sh
   cd ../client
   npm start
