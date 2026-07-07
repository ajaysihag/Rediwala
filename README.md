# Rediwala

Rediwala is a full-stack web app for discovering street vendors. This repository is organized as a monorepo with a Next.js frontend and an Express/MongoDB backend.

## Day 1 Progress

- Created `frontend` and `backend` workspaces.
- Added Express server foundation.
- Added MongoDB connection setup with Mongoose.
- Added environment configuration.
- Added `GET /ping` health endpoint.
- Added base folders for controllers, routes, models, middleware, services, utils, and config.
- Added a minimal responsive Next.js + Tailwind starter page.

## Project Structure

```text
rediwala/
  backend/
    src/
      config/
      controllers/
      middleware/
      models/
      routes/
      services/
      utils/
      app.js
      server.js
  frontend/
    app/
    public/
    src/
      lib/
      types/
```

## Requirements

- Node.js 18+
- npm 9+
- MongoDB running locally or a MongoDB Atlas URI

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create backend environment file:

```bash
cp backend/.env.example backend/.env
```

3. Update `backend/.env` if needed:

```env
PORT=5000
MONGODB_URI=mongodb://127.0.0.1:27017/rediwala
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

4. Start both apps:

```bash
npm run dev
```

5. Open the apps:

- Frontend: `http://localhost:3000`
- Backend health check: `http://localhost:5000/ping`

## Next Steps

Day 2 will add the User schema, register/login APIs, JWT authentication middleware, and password hashing.
