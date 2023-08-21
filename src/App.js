import logo from './logo.svg';
import './App.css';
import Router from './component/Router';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">

 <Router/>

 <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default App;
