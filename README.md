<h2>Rehabit🧠📈</h2>

🚀 This repository contains only the **backend** of the project. To access the **frontend**, visit the corresponding repository: 

🔗 [Frontend Repository](https://github.com/Jose-silvaa/frontend-rehabit) 

## About the project

<p>A tool to help people improve their habits, based on the habit loop concept (cue, routine, reward).</p>

## 🚀 Technologies Used
- Node.js
- Fastify
- TypeScript
- Database (PostgreSQL)
- ORM (Prisma)
- Validations (Zod)

## 📦 Installation

```sh
# Clone the repository
git clone https://github.com/Jose-silvaa/server-habit.git

# Install dependencies
npm install

# Prisma 
npx prisma migrate dev --name init

#Generate migrate
npx prisma generate

# Run the project
npm run dev

```

### **Environment Variables**
Create a `.env` file based on `.env.example` and fill in the necessary values:
```
DATABASE_URL=postgres://your_user:your_password@localhost:5432/your_database
```

## 🌍 Live   
🚧 The backend is not deployed yet. Stay tuned! 🚧  

<!-- 
## 🌍 Live Demo  
The frontend is deployed and available at:  

🔗 [Frontend URL](https://frontend-rehabit.example.com)  

-->
