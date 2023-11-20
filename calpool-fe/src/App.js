import logo from './logo.svg';
import './App.css';
import ViewCarpools from './pages/ViewCarpools/ViewCarpools.js';
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
          <Route path="/view_carpools" element={<ViewCarpools/>}>
          </Route>
          <Route path="/" element={<div>HELLO WORLD</div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
