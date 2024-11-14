
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



=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> master
