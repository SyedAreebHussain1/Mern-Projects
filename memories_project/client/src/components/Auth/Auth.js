import React, { useState } from "react";
import {
  Avatar,
  Button,
  Paper,
  Typography,
  Container,
  Grid,
  TextField,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from "./Input";
import useStyles from "./styles";
const Auth = () => {
  const classes = useStyles();
  const isSignup = false;
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = () => {};
  const handleChange = () => {};
  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isSignup ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input
                  type="text"
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                //   endAdornment
                  autoFocus
                  half
                />
                <Input
                  type="text"
                  name="lastName"
                  label="Last Name"
                  handleChange={handleChange}
                //   endAdornment
                //   autoFocus
                  half
                />
              </>
            )}
            <Input
              type="text"
              name="email"
              label="Email Address"
              handleChange={handleChange}
            //   endAdornment
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
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
