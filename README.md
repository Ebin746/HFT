
# 🎓 Scholarship Knight
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://semver.org)
A web application connecting students with scholarship opportunities, utilizing AI for scoring.

## Features

- 📚 **Scholarship Listings**: Browse and filter available scholarships.
- ➕ **Scholarship Creation**: Admin interface to add new scholarship listings.
- ✍️ **Application Submission**: Submit scholarship applications online.
- 🔑 **User Authentication**: Secure sign-up and login using email and password.
- 🤖 **AI-Powered Scoring**: AI evaluates applicants based on specified criteria.
- 🌐 **Responsive UI**: User interface optimized for various screen sizes.
- ⏰ **Real-time Deadline**: Realtime Deadline Functionallity

## Tech Stack

| Category   | Technologies                                        | Documentation                                                                                                |
|------------|-----------------------------------------------------|-------------------------------------------------------------------------------------------------------------|
| Frontend   | React v18.3.1                                      | [React Docs][react-url]                                                                                       |
|            | Vite v6.0.3                                         | [Vite Docs][vite-url]                                                                                         |
|            | React Router DOM v7.1.0                             | [React Router DOM Docs][react-router-dom-url]                                                              |
|            | Axios v1.7.9                                         | [Axios Docs][axios-url]                                                                                      |
| Backend    | Node.js v18+                                       | [Node.js Docs][node-url]                                                                                    |
|            | Express v4.21.2                                   | [Express Docs][express-url]                                                                                 |
| Database   | MongoDB v5+                                        | [MongoDB Docs][mongodb-url]                                                                                   |
|            | Mongoose v8.9.2                                      | [Mongoose Docs][mongoose-url]                                                                                 |
| AI         | Google Gemini                                       | [Google Gemini Docs][google-gemini-url]                                                                        |
| Other      | Cors v2.8.5                                        |                                                                                                             |
|            | Dotenv v16.4.7                                     |                                                                                                             |
|            | Nodemon v3.1.9                                     |                                                                                                             |

## Quick Start

### Prerequisites

- Node.js: v18 or higher (Check with `node -v`)
- npm: v9 or higher (Check with `npm -v`)
- MongoDB: Running instance, local or cloud.

### Installation

bash
git clone [repository-url]
cd Scholarship-Knight
cd backend
npm install
cd ../frontend/project
npm install
cd ../..


or

bash
git clone [repository-url]
cd Scholarship-Knight
cd backend
yarn install
cd ../frontend/project
yarn install
cd ../..


### Environment

Create a `.env` file in the `backend` directory with the following variables:

env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/HTF


> Replace `mongodb://localhost:27017/HTF` with your MongoDB connection string.

## Development

### Commands

bash
# Start the backend development server
cd backend
npm run start 
# Start the frontend development server
cd ../frontend/project
npm run dev


or

bash
# Start the backend development server
cd backend
yarn start
# Start the frontend development server
cd ../frontend/project
yarn dev


### Testing

Currently, testing is performed manually. Ensure all features work as expected after making changes.

## API Reference

| Method | Endpoint      | Body                                                                                                                                                                                                                                                                  | Response                                                  |
|--------|--------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------|
| POST   | `/user`     | `{ name, email, password, academicPerformance, incomeLevel, financialNeed }` | `201 Created` (new user object)                          |
| GET    | `/user`     |                                                                                                                                                                                                                                                                  | `200 OK` (array of user objects)                           |
| GET    | `/user/:id`  |                                                                          | `200 OK` (single user object)                              |
| POST   | `/scholarship`| `{ name, type, description, eligibilityCriteria: { academicThreshold, incomeLevel, financialNeed }, awardAmount,Deadline }` | `201 Created` (new scholarship object)                     |
| GET    | `/scholarship`|                                                                                                                                                                                                                                                                  | `200 OK` (array of scholarship objects)                  |
| GET    | `/scholarship/:id` |                                                                                                                                                                                                                                                                  | `200 OK` (single scholarship object)                    |
| POST   | `/user/apply`| `{ userId, scholarshipId }`                                            | `200 OK` (success message, AI score)                       |
| POST   | `/ai`     | `{ scholarshipId }`         | `200 OK` (AI-generated score/need) |

## Deployment

1.  **Build**: Run `cd frontend/project && npm run build`.
2.  **Prepare**: Ensure dependencies are in `backend/package.json` and the start script is correct.
3.  **Deploy**:  Deploy to platforms like Heroku, AWS, Google Cloud. Deploy the `frontend/project/dist` directory to static hosting (Vercel, Netlify, GitHub Pages).

## Contributing

1.  Fork the repository.
2.  Create a branch: `git checkout -b feat/new-feature` or `git checkout -b bugfix/issue-123`.
3.  Commit changes with descriptive messages.

    -   **Branch Naming**: `feat/`, `bugfix/`, `chore/` prefixes.
    -   **Commit Messages**: Follow [Conventional Commits][conventional-commits].

4.  Push the branch to your fork.
5.  Create a pull request.

[node-url]: https://nodejs.org/en/docs/
[express-url]: https://expressjs.com/
[mongodb-url]: https://www.mongodb.com/docs/
[mongoose-url]: https://mongoosejs.com/docs/
[react-url]: https://react.dev/
[vite-url]: https://vitejs.dev/guide/
[axios-url]: https://axios-http.com/docs/intro
[react-router-dom-url]: https://reactrouter.com/en/main
[conventional-commits]: https://www.conventionalcommits.org/en/v1.0.0/
[google-gemini-url]: https://ai.google.dev/
