import { AUTH, LOGOUT } from "../constants";

export default (state = { authData: null }, action) => {
  switch (action.type) {
    // console.log(action?.data)
    case AUTH:
      // localStorage.setItem("token", action?.data?.token)
      localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
      return { ...state, authData: action?.data, loading: false, errors: null };
    case LOGOUT:
      localStorage.clear();
      return { ...state, authData: null, loading: false, errors: null };
    default:
      return state;
  }
};
