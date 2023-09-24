import React, { useState, useRef, useEffect } from "react";
import {
  Avatar,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants";
import Input from "./Input";

import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Icon from "./icon";
import useStyles from "./styles";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState();
  const form = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      if (
        formData.firstName &&
        formData.lastName &&
        formData.email &&
        formData.password &&
        formData.confirmPassword
      ) {
        dispatch(signup(formData, navigate, setFormData));
        // form.current.reset();
        // setFormData({});
        // setIsSignup((prevIsSignup) => !prevIsSignup);
      } else {
        console.log(formData);
        console.log("all field req frontend");
      }
    } else {
      if (formData.email && formData.password) {
        dispatch(signin(formData, navigate));
      } else {
        console.log("all field req frontend sign in");
      }
    }
  };
  // const onSuccess = (msg) => {
  //   console.log('succ', msg)

  // }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId:
          "682658453111-rtvna8uvnakdn2v3n6hbt68alcg4sdbo.apps.googleusercontent.com",
        scope: "email",
      });
    }
    gapi.load("client:auth2", start);
  }, []);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
    form.current.reset();
  };
  // memoriesapp-399223
  // Memoriesapp
  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      dispatch({ type: AUTH, payload: { result, token } });
      navigate("/");
    } catch (error) {
      console.log("error catch", error);
    }
  };
  const googleFailure = (error) => {
    console.log("error", error);
    console.log("Google Sign In was unsuccessful. Try Again Later");
  };
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form ref={form} className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  type="text"
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                  autoFocus
                  half
                />
                <Input
                  type="text"
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                  half
                />
              </>
            )}
            <Input
              type="text"
              name="email"
              label="Email Address"
              handleChange={handleChange}
              autoFocus
              half
            />
            <Input
              type={showPassword ? "text" : "password"}
              name="password"
              label="Password"
              handleChange={handleChange}
              endAdornment
              autoFocus
              handleShowPassword={handleShowPassword}
              half
            />
            {isSignup && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            {isSignup ? "Sign Up" : "Sign In"}
          </Button>
          <GoogleLogin
            // url https://console.developers.google.com/
            // Client Secret: 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
            clientId="682658453111-rtvna8uvnakdn2v3n6hbt68alcg4sdbo.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignup
                  ? "Already have an account? Sign In"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
