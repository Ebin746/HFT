
# 🎓 Scholarship Knight

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)
[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg)](https://example.com/build)

A web application designed to connect students with relevant scholarship opportunities, leveraging AI for application scoring.

## Features

- 🔧 **User Authentication**: Secure sign-up and login functionality.
- 🔎 **Scholarship Listings**: Browse a comprehensive database of available scholarships.
- 📝 **Scholarship Application**: Apply for scholarships directly through the platform.
- 🤖 **AI-Powered Scoring**: AI evaluates applications based on financial need, academic performance, and other criteria.
- ➕ **Scholarship Creation**: Admin interface to add and manage scholarships.
- ⏱️ **Deadline Tracking**: Real-time updates on scholarship deadlines.

## Tech Stack

| Category   | Technologies                                     |
|------------|--------------------------------------------------|
| Frontend   | React [React Docs][react-url], Vite [Vite Docs][vite-url] , React Router Dom [React Router Dom][react-router-dom-url] |
| Backend    | Node.js [Node.js Docs][node-url], Express [Express][express-url]        |
| Database   | MongoDB [MongoDB Docs][mongodb-url], Mongoose [Mongoose Docs][mongoose-url]         |
| AI          | Google Gemini [Google Gemini Docs][google-gemini-url]        |
| DevOps     |                                                  |

## Quick Start

### Prerequisites

- Node.js: v18+ (check with `node -v`)
- npm: v9+ (check with `npm -v`)
- MongoDB: Running locally or accessible via URI

### Installation

bash
# Clone the repository
git clone [repo-url]

# Navigate to the backend directory
cd backend

# Install backend dependencies
npm install

# Navigate to the frontend directory
cd ../frontend/project

# Install frontend dependencies
npm install


### Environment

Create `.env` file in the backend directory

env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/HTF


> [!NOTE]
> Ensure the `MONGODB_URI` is correctly configured to point to your MongoDB instance. Replace `HTF` with your desired database name.

## Development

### Commands

bash
# Start the backend development server
cd backend
npm run start # Uses nodemon

# Start the frontend development server
cd ../frontend/project
npm run dev


### Testing

Currently, automated testing is not configured. Manual testing should be performed to ensure functionality.

## API Reference

### User Endpoints
| Method | Endpoint       | Body                                                                                                                              | Response                                     |
|--------|----------------|-----------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| POST   | /user          | `{ name: "John", email: "john@example.com", password: "password", academicPerformance: 85, incomeLevel: "medium", financialNeed: "high" }` | 201 Created                                  |
| GET    | /user          |                                                                                                                                   | 200 OK (Array of users)                      |
| POST   | /user/apply    | `{ userId: "user_id", scholarshipId: "scholarship_id" }`                                                                            | 200 OK (Success message with AI score)      |
| GET    | /user/:id      |                                                                                                                                   | 200 OK (Single user object)                 |

### Scholarship Endpoints

| Method | Endpoint       | Body                                                                                                                                                                                                   | Response                                     |
|--------|----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------|
| POST   | /scholarship   | `{ name: "Scholarship Name", type: "Merit-based", description: "Scholarship Description", eligibilityCriteria: { academicThreshold: 90, incomeLevel: "low", financialNeed: "high" }, awardAmount: 5000, Deadline: 1672531200 }` | 201 Created                                  |
| GET    | /scholarship   |                                                                                                                                                                                                         | 200 OK (Array of scholarships)               |
| GET    | /scholarship/:id |                                                                                                                                                                                                         | 200 OK (Single scholarship object)            |

### AI Endpoints

| Method | Endpoint       | Body                        | Response                                     |
|--------|----------------|-----------------------------|----------------------------------------------|
| POST   | /ai            | `{ scholarshipId: "scholarship_id" }` | 200 OK (AI generated name and ID)  |

## Deployment

### Backend Deployment

Steps to deploy the backend:

1.  **Prepare the application**: Ensure that all dependencies are listed correctly in `backend/package.json` and that the start script is correctly set up to start your Node.js application.

2.  **Set Environment Variables**: Set the `MONGODB_URI` environment variable in your deployment environment.

3.  **Deploy**: Deploy the backend to a hosting platform such as Heroku, AWS, or Google Cloud.

### Frontend Deployment

Steps to deploy the frontend:

1.  **Build the Project**: Run `npm run build` to create an optimized production build of your application.

2.  **Deploy**: Deploy the `dist` directory to a static hosting service such as Vercel, Netlify, or GitHub Pages.

## Contributing

1.  Fork the repository.
2.  Create a branch for your feature or bug fix (`git checkout -b feat/new-feature` or `git checkout -b bugfix/issue-123`).
3.  Commit your changes with descriptive messages.
4.  Push your branch to your fork.
5.  Create a pull request to the main repository.

- **Branch Naming**: `feat/`, `bugfix/`, `chore/` prefixes
- **Commit Messages**: Follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

[react-url]: https://react.dev/
[express-url]: https://expressjs.com/
[mongodb-url]: https://www.mongodb.com/docs/
[mongoose-url]: https://mongoosejs.com/docs/
[node-url]: https://nodejs.org/en/docs/
[vite-url]: https://vitejs.dev/guide/
[react-router-dom-url]: https://reactrouter.com/en/main
[google-gemini-url]: https://ai.google.dev/
