import express from 'express'
const app = express()

// Routes
import test from './test'

app.use("/test", test);

export default app


