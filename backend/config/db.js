import mongoose from "mongoose";

const connectDB = async () => {

    //const url = 'mongodb://localhost:27017/applicationdb' 
    const url = 'mongodb+srv://appuser:mongodb123@cluster0.na7lp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

    try {
        const conn = await mongoose.connect(url)

        console.log(`MongoDB Connected ${conn.connection.host}`)

    } catch (err) {

        console.log(`Error: ${err.message}`)
        console.exit(1)
    }

}

export default connectDB