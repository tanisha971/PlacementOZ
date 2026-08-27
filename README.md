# PlacementOZ

*Set up the React frontend*

npm create vite@latest . -- --template react

npm install

React Router: npm install react-router-dom

Tailwind: npm install tailwindcss @tailwindcss/vite

API communication: npm install axios

Icons Lucide: npm install lucide-react

Forms: npm install react-hook-form zod @hookform/resolvers

Data fetching: npm install @tanstack/react-query

Charts: npm install recharts

*Configure Tailwind*

client/vite.config.js
    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    })

*set up the backend*
Initialize Node: npm init -y

*Install backend packages*

Install Express: npm install express

MongoDB: npm install mongoose

Environment variables: npm install dotenv

CORS: npm install cors

Password hashing: npm install bcryptjs

JWT: npm install jsonwebtoken

Validation: npm install zod

Development dependency: npm install -D nodemon





















