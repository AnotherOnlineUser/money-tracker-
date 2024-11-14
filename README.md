# Personal Finance Tracker (In Progress)

This is a personal finance tracker web application that allows users to track their transactions and monitor their balance. The project is still in progress and aims to provide an easy way to add, view, and manage financial transactions in real-time.

## Features
- Add new transactions with details such as name, price, description, and date/time.
- View a list of all transactions.
- Display the total balance based on transactions (positive and negative amounts).
- Built with React on the frontend and Express.js on the backend.
- Data is stored and retrieved from MongoDB, using MongoDB Atlas for cloud storage.

## Tech Stack
- **Frontend**: React, JavaScript, HTML, CSS (with Tailwind CSS)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (hosted on MongoDB Atlas)

## Installation Instructions

### 1. Clone the Repository
Clone this repository to your local machine:
```bash
git clone https://github.com/your-username/finance-tracker.git cd finance-tracker
```

### 2. Install Backend Dependencies
Navigate to the `api` folder and install the necessary backend dependencies:
```bash
cd api npm install
```


### 3. Set Up Environment Variables
Create a `.env` file in the `api` folder with your MongoDB Atlas connection string:
```bash
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/your-database-name?retryWrites=true&w=majority
```


### 4. Run the Backend
Start the backend server by running:
```bash
npm start
```
The backend will be running at `http://localhost:4000`.

### 5. Install Frontend Dependencies
Navigate to the `frontend` folder and install the necessary frontend dependencies:
```bash
cd frontend npm install
```


### 6. Run the Frontend
Start the frontend development server:
```bash
npm start
```

The frontend will be running at `http://localhost:3000`.

## Known Issues
- The project is currently under development, so some features may not be fully functional yet.
- There may be occasional issues with database connectivity, particularly when the backend server is not running or misconfigured.

## Future Improvements
- Implement user authentication and authorization.
- Improve the UI/UX with better styling and interactivity.
- Add charts and graphs to visualize the balance and spending patterns.
- Add recurring transaction support.

## Status
**In Progress**: The project is currently being developed, and new features will be added soon.



