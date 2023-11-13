import logo from './logo.svg';
import './App.css';
import CarpoolMangement from './pages/CarpoolManagement'; 
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/about">
          </Route>
          <Route path="/users">
          </Route>
          <Route path="/" element={<CarpoolMangement />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
