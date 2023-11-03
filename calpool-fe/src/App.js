import logo from './logo.svg';
import './App.css';
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
          <Route path="/" element={<div>HELLO WORLD</div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
