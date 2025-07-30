// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: '#f5f5f5',
          borderRadius: '8px',
          padding: '0 16px',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          minWidth: '100px',
          padding: '12px 16px',
          '&.Mui-selected': {
            backgroundColor: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
  },
});

export default theme;