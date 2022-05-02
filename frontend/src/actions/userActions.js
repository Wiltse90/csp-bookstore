import axios from "axios"
import { USER_LOGIN_LOGOUT, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_REGISTER_SUCCESS } from "../constants/userConstants"


export const login = (email, password) => async (dispatch, getState) => {

    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'applcation/json'
            }
        }

        const {data} = await axios.post('/api/users/login', {email, password})

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {

    }
}

export const logout = () => async (dispatch, getState) => {
    localStorage.removeItem('userInfo')
    dispatch({type: USER_LOGIN_LOGOUT, payload:{}})
}

export const register = (name, email, password) => async (dispatch) => {

    try{
        dispatch({
            type: USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'applcation/json'
            }
        }

        const {data} = await axios.post('/api/users', {name, email, password})

        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {

    }
}