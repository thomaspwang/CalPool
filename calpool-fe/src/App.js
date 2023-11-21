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
import InputUserInfo from './pages/InputUserInfo/InputUserInfo';
import PictureUpload from './pages/PictureUpload/PictureUpload.js';
import Verification from './pages/Verification/Verification.js';
import { ThemeProvider } from '@mui/material/styles';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path='/forgotpassword' element={<ForgotPassword />}/>
          <Route path='/verify' element={<Verification />} />
          <Route path='/uploadpic' element={<PictureUpload/>} />
          <Route path='/userinfo' element={<InputUserInfo/>} />
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
