import { AUTH } from "../constants/index";
import { signIn, signUp } from "../api/index";

export const signin = (formData, navigate) => async (dispatch) => {
  try {
    // sign in the user
    const { data } = await signIn(formData);
    dispatch({ type: AUTH, payload: data });
    navigate("/");
  } catch (error) {
    console.log("error", error?.message);
  }
};

export const signup = (formData, navigate, setFormData) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await signUp(formData);
    dispatch({ type: AUTH, payload: data });
    navigate("/");
    setFormData({});
    // setIsSignup(false);
  } catch (error) {
    console.log("error", error?.message);
  }
};
