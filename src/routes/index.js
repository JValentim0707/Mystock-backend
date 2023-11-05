import express from 'express'
const app = express()
import cors from 'cors'

// Routes
import authRoute from './auth'

app.use(cors( {
  origin: ' http://localhost:5173'
}))

app.use("/auth", authRoute);


export default app


