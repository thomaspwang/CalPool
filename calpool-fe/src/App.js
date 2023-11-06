import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
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
    </div>
  );
}

export default App;
