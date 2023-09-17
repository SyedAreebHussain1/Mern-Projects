import { SIGNUP, SIGNIN, AUTH } from '../constants/index'
import { signups } from '../api/index'

export const signin = (formData, navigate) => async (dispatch) => {
    try {
        // log in the user
        const { data } = await signups(formData)
        dispatch({ type: SIGNIN, payload: data })
        navigate('/')
    } catch (error) {
        console.log('error', error?.message)
    }
}


export const signup = (formData, navigate) => async (dispatch) => {
    try {
        // sign up the user
        const { data } = await signups(formData)
        dispatch({ type: SIGNUP, payload: data })
        navigate('/')
    } catch (error) {
        console.log('error', error?.message)
    }
}