import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Button,
  Typography,
  TextField,
  Stack,
  Divider,
  InputAdornment,
  IconButton,
  OutlinedInput,
} from '@mui/material';
import { createUser } from '../../helpers/getDataFromServer';
import { classes } from '../../components/style';
import { checkEmail, checkPassword } from 'utils/checkEmailPass';
import { useRouter } from 'next/router';
// import { toast } from 'react-toastify';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Layout from '../../components/Layout';
import { useAuthContext } from '@/context/AuthContext';
import LoadingSpinner from 'components/Spinner';

const Signup = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuthContext();
  const [isSpinning, setIsSpinning] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState();
  const [passwordIsValid, setPasswordIsValid] = useState();
  const emailRef = useRef(null);
  const passRef = useRef(null);

  //===============1. Sign In with firebase/auth when click Login button==============
  const onSubmitHandler = async () => {
    setIsSpinning(true);

    const email = emailRef.current.value;
    const password = passRef.current.value;

    if (emailIsValid && passwordIsValid)
      try {
        const result = await createUser('signup', {
          email,
          password,
        });

        console.log('user created', result);

        setIsLoggedIn(true);
        setIsSpinning(false);
        router.push('/');
      } catch (error) {
        alert(error.message);
      }
  };

  //===================Helper functions====================================
  const emailChecker = () => {
    const result = checkEmail(emailRef.current.value);
    if (result) setEmailIsValid(true);
    if (!result) setEmailIsValid(false);
  };
  const passwordChecker = () => {
    const result = checkPassword(passRef.current.value);
    if (result) setPasswordIsValid(true);
    if (!result) setPasswordIsValid(false);
  };

  //=======================Toggle show password=================================
  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  //===============================================================
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Layout>
      <LoadingSpinner open={isSpinning} />

      <Box sx={classes.modalContainer}>
        <Stack p={4}>
          <Typography mb={5} sx={classes.modalTypo}>
            БҮРТГҮҮЛЭХ
          </Typography>
          <Stack spacing={2} direction='column'>
            <Typography sx={classes.modalTypo1} mb={3}>
              Email
            </Typography>
            <TextField
              name='email'
              type='email'
              inputRef={emailRef}
              placeholder='enter email'
              // size={is600px && 'small'}
              sx={classes.modalTxtField}
              onBlur={emailChecker}
            />
            {emailIsValid === false && (
              <Typography variant='font12' color='secondary.main'>
                Имэйлд @ агуулсан байх ёстой.'
              </Typography>
            )}
            <Stack>
              <Typography sx={classes.modalTypo1} my={3}>
                Password
              </Typography>
              <OutlinedInput
                name='password'
                type={showPassword ? 'text' : 'password'}
                // size={is600px && 'small'}
                inputRef={passRef}
                placeholder='password'
                onBlur={passwordChecker}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge='end'
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {passwordIsValid === false && (
                <Typography variant='font12' color='secondary.main'>
                  Хамгийн багадаа 6н оронтой тоо.'
                </Typography>
              )}
              {/* <Typography
                variant='font14'
                my={3}
                onClick={() => navigate('/forgot-password')}
                color='primary.forgot'
              >
                Forgot Password?
              </Typography> */}
            </Stack>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button
                variant='contained'
                onClick={onSubmitHandler}
                sx={{ width: '100%', marginTop: '10px' }}
              >
                Бүртгүүлэх
              </Button>
              <Divider textAlign='center' sx={{ mt: 5 }}>
                эсвэл{' '}
              </Divider>
              <Button variant='outlined' onClick={() => router.push('/login')}>
                Нэвтрэх <ArrowRightOutlinedIcon />
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Signup;
