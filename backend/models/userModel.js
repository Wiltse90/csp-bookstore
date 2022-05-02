import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    roles:{
        type: String,
        required: true,
        default: 'none'
    },
}, {timestamps: true})


userSchema.methods.matchPassword = async function(enteredPassword) {
    console.log(enteredPassword == this.password);
    return enteredPassword == this.password
}

userSchema.pre('save', async function (next) {
    
})

const User = mongoose.model('User', userSchema)

export default User