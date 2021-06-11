import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import {
  InputLabel,
  Input,
  FormHelperText,
  Theme,
  createStyles,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { SyteldForm } from './LoginForm.styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    loginButton: {
      height: 48,
    },
  }),
);

const LoginForm = () => {
  const classes = useStyles();
  return (
    <Container>
      <SyteldForm>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          margin="normal"
          required
          id="standard-required"
          label="Username"
        />
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          margin="normal"
          required
          id="standard-required"
          label="password"
          type="password"
        />

        <Button
          className={classes.loginButton}
          variant="contained"
          color="primary"
        >
          <span>登录</span>
        </Button>
      </SyteldForm>
    </Container>
  );
};

export default LoginForm;
