import { createTheme, ThemeProvider } from '@mui/material/styles';

const Theme = createTheme({
  spacing: 4,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1000,
      lg: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#000',
      white: '#fff',
      dark: '#01a66f',
      contrastText: '#fff',
      forgot: '#1976d2',
    },
    secondary: {
      main: '#f44336',
      light: '#ff7961',
      dark: '#ba000d',
      contrastText: '#fff',
      darkBlue: '#000723',
      grey: '#a0a2a8',
      black: '#000',
    },
    background: {
      paper: '#fff',
      default: '#212121',
      grey: '#F5F5F7',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
      grey: '#6D7D8B',
      darkBlue: '#1E2742',
    },
  },
  shape: {
    borderRadius: 4,
  },
  typography: {
    fontFamily: 'Mulish',
  },
  h3: {
    fontSize: '3rem',
    fontWeight: '800',
  },
});

export const CustomTheme = ({ children }) => {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>;
};

// m - margin p - padding

// Where sides is one of:

// t - margin-top or padding-top

// b - margin-bottom or padding-bottom

// l - margin-left or padding-left

// r - margin-right or padding-right

// x - both *-left and *-right

// y - both *-top and *-bottom

//<Typography variant='font14DarkBLue' ml={2.5}>

//  <InputBase
//    bgcolor='background.grey'
//  />

// xs, extra-small: 0px
// sm, small: 600px
// md, medium: 900px
// lg, large: 1200px
// xl, extra-large: 1536px
