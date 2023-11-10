import theme from './theme';    
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import InputUserInfo from './pages/InputUserInfo/InputUserInfo';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/userinfo' element={<InputUserInfo/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/" element={<div>HELLO WORLD</div>}>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
