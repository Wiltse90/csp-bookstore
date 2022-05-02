import express from 'express'


const router = express.Router()

import {
    getUser, registerUser,
} from '../controllers/userController.js'
router.route('/').post(registerUser)
router.post('/login', getUser)
router.post('/profile', getUser)


export default router