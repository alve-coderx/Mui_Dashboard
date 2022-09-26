import { useRoutes } from 'react-router-dom';
import router from 'src/router';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';
import { ModeProvider } from './contexts/ModeProvider';


function App() {
  const content = useRoutes(router);

  return (
       <ModeProvider>
         <ThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              {content}
            </LocalizationProvider>
          </ThemeProvider>
       </ModeProvider>
  );
}
export default App;
