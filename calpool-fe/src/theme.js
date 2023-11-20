import { createTheme } from '@mui/material/styles'

const theme = createTheme({      
  typography: {
    button: {
      textTransform: 'none',
    }
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#00ABB3',
      contrastText: "#ffffff"
    },
    secondary: {
      main: '#3C4048',
    },
  },
});

export default theme;