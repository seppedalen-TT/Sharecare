import Signup from './pages/Signup'
import './App.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Signup />
    </ThemeProvider>
  );
}

export default App;
