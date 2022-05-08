import express from 'express'
import products from './data/prod.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'
import path from 'path'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)

app.use('/login', userRoutes)

app.get('/api/product', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

//app.use('/')

const __dirname = path.resolve()

// Have Node serve the files for our built React app
app.use(express.static(path.resolve(__dirname, './frontend/build')));

// Handle GET requests to /api route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
});
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './frontend/build', 'index.html'));
})


const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV 
app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`))