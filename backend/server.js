import express from 'express'
import products from './data/prod.js'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/users', userRoutes)
app.use('/login', userRoutes)


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.get('/api/product', (req, res) => {
    res.json(products)
})

app.get('/api/product/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id)
    res.json(product)
})

const PORT = process.env.PORT || 5000
const MODE = process.env.NODE_ENV 
app.listen(PORT, console.log(`Server running in ${MODE} mode on port ${PORT}`))