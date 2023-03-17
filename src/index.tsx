import { RouterProvider } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMemo } from 'react';
import router from './routes/routesConfig';

const ExcalaApp = () => {
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersLightMode ? 'light' : 'dark',
        },
      }), [prefersLightMode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default ExcalaApp;
