import styles from '../styles/Header.module.css';
import Image from 'next/image';
import WomanImg from '../public/woman.png';
import { Typography, Stack, TextField, Button } from '@mui/material';
import Layout from './Layout';

const Showcase = () => {
  return (
    <Layout>
      <div className={styles.header}>
        <div>
          <Image
            src={WomanImg}
            alt='Picture of the author'
            className={styles.coverImg}
          />
        </div>
        <div className={styles.content}>
          <Typography
            variant='h3'
            color='primary.white'
            fontSize={{
              lg: 48,
              md: 48, //>1000px
              sm: 32, //600-1000px
              xs: 24, //<600px
            }}
          >
            Instant collaborations for remote teams
          </Typography>
          <Typography
            variant='body1'
            color='primary.white'
            fontSize={{
              lg: 18,
              md: 18, //>1000px
              sm: 14, //600-1000px
              xs: 12, //<600px
            }}
          >
            All in one for your remote team chats, collaboration and track
            projects
          </Typography>
          <Stack direction='row' mt={8}>
            <TextField
              variant='filled'
              sx={{
                background: '#fff',
                borderRadius: '5px',
                width: '200px',
              }}
              inputProps={{ sx: { xs: { padding: 0 } } }}
              InputLabelProps={{ sx: { color: 'primary.main' } }}
              label='Email'
            />
            <Button
              variant='contained'
              sx={{
                background: '#0BBEF2',
                marginLeft: '10px',
                lineHeight: '1',
              }}
            >
              Get Early Access
            </Button>
          </Stack>
        </div>
      </div>
    </Layout>
  );
};

export default Showcase;
