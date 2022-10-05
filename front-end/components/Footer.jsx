import _ from 'lodash';
import { East } from '@mui/icons-material';
import { footerArray, networks } from '../utils/usefulArray';
import {
  Box,
  Grid,
  Typography,
  Stack,
  TextField,
  InputAdornment,
} from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        background: '#252B3B',
        py: 5,
        px: 7,
        color: 'white',
      }}
    >
      <Grid container spacing={10} justifyContent='space-evenly'>
        <Grid item>
          <Stack direction={'row'} alignItems='baseline' sx={{ mb: '8px' }}>
            <Typography variant='h4'>team</Typography>
            <Typography variant='h4' sx={{ color: '#0BBEF2' }}>
              .
            </Typography>
          </Stack>
          {_.map(Object.entries(networks), ([netName, NetIcon], i) => (
            <Typography
              key={i}
              sx={{
                display: 'flex',
                alignItems: 'center',
                lineHeight: 2,
                cursor: 'pointer',
                transformOrigin: 'left',
                '&:hover': { transform: 'scale(1.1) ' },
                transition: 'transform 0.15s ease-in-out',
              }}
            >
              <NetIcon style={{ marginRight: '5px' }} />
              {`${netName}`}
            </Typography>
          ))}
        </Grid>
        {_.map(Object.entries(footerArray), ([name, item]) => (
          <Grid item key={name} sx={{ textTransform: 'capitalize' }}>
            <Typography
              sx={{
                mb: 3,
                cursor: 'pointer',
                transformOrigin: 'left',
                '&:hover': { transform: 'scale(1.1) ' },
                transition: 'transform 0.15s ease-in-out',
              }}
            >
              {name}
            </Typography>
            {_.map(item, (el, i) => (
              <Typography
                key={i}
                sx={{
                  lineHeight: 2,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#878787',
                  },
                  transition: 'transform 0.15s ease-in-out',
                }}
              >
                {el}
              </Typography>
            ))}
          </Grid>
        ))}
        <Grid item>
          <TextField
            type={'text'}
            label='Email'
            sx={{
              background: 'white',
              '& fieldSet': { border: 'none' },
              width: 300,
              borderRadius: 1,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <East />
                </InputAdornment>
              ),
              style: { color: '#878787' },
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
