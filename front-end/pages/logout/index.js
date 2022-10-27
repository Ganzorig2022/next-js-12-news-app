import React from 'react';
import { Box, Button, Typography, Stack } from '@mui/material';
import { classes } from '../../components/style';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import { useAuthContext } from '@/context/AuthContext';
import { deleteCookie } from 'cookies-next';

const Logout = () => {
  const router = useRouter();
  const { setIsLoggedIn } = useAuthContext();

  const onSubmitHandler = async (choice) => {
    if (choice === 'yes') {
      setIsLoggedIn(false);
      deleteCookie('token');
      alert('та системээс гарлаа.');
      router.push('/');
    }
    router.push('/');
  };

  return (
    <Layout>
      <Box sx={classes.modalContainer}>
        <Stack p={4}>
          <Typography mb={5} sx={classes.modalTypo}>
            СИСТЕМЭЭС ГАРАХ?
          </Typography>
          <Stack spacing={2} direction='column'>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Stack direction='row'>
                <Button
                  variant='contained'
                  onClick={() => onSubmitHandler('yes')}
                  sx={{ width: '100%', marginTop: '10px' }}
                >
                  Тийм
                </Button>
                <Button
                  variant='contained'
                  onClick={() => onSubmitHandler('no')}
                  sx={{ width: '100%', margin: '10px 20px 0' }}
                >
                  Үгүй
                </Button>
              </Stack>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Layout>
  );
};

export default Logout;
