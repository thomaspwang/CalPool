import theme from './theme';    
import './App.css';
import CarpoolMangement from './pages/CarpoolManagement'; 
import ViewCarpools from './pages/ViewCarpools/ViewCarpools';
import CalpoolCreation from './pages/CalpoolCreation';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme} className="App">
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/view_carpools" element={<ViewCarpools/>}>
          </Route>
          <Route path="/" element={<div>HELLO WORLD</div>}>
          </Route>
          <Route path="/create_carpool" element={<CalpoolCreation/>}>
          </Route>
          <Route path="/carpool_management" element={<CarpoolMangement/>}>
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
