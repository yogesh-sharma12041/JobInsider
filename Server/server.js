import './Config/instrument.js'
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectMongoDB from './Config/db.js'
import * as Sentry from '@sentry/node'
import { clerkWebhooks } from './Controllers/webhooks.js'


//Initialize Express
const app = express()

//Connect to database
await connectMongoDB();


//Middlewares
app.use(cors());
app.use(express.json());


//Routes
app.get('/', (req, res) => res.send("API Working"))
app.get("/debug-sentry", function mainHandler(req, res) {
    throw new Error("My first Sentry error!");
  });
app.post('/webhooks', clerkWebhooks)
app.get('/api', (req, res) => {
    res.json({message: "Hello From Vercel Backend!"})
})

//Port
const PORT = process.env.PORT || 5000;

Sentry.setupExpressErrorHandler(app);

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`)
})