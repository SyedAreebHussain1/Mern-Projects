import React from "react";
import { Grid, TextField, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  half,
  label,
  handleChange,
  type,
  autoFocus,
  handleShowPassword,
  endAdornment,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        label={label}
        autoFocus={autoFocus}
        type={type}
        InputProps={
          name === "password" ? (
            // {
            endAdornment
          ) : (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {type === "password" ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }
        // }
        required
        fullWidth
      />
    </Grid>
  );
};

export default Input;
