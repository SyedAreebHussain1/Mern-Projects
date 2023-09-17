import { AUTH, LOGOUT } from "../constants";

export default (state = { authData: null }, action) => {
    switch (action.type) {
        // console.log(action?.data)
        case AUTH:
            // localStorage.setItem("token", action?.data?.token)
            localStorage.setItem("profile", JSON.stringify({ ...action?.data }))
            return { ...state, authData: action?.data }
        case LOGOUT:
            localStorage.clear()
            return { ...state, authData: null }
        default: return state
    }
}