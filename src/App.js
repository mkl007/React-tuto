import logo from './logo.svg';
// import './App.css';
import Welcome from './components/Welcome';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Contact from './pages/contact';
import Sobremi from './pages/sobremi';
import Profile from './pages/profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Router>
          <div>
            <uli>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contacto</Link>
              </li>
              <li>
                <Link to="/sobremi">Sobre mi</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </uli>
          </div>
          <Routes>
            <Route path="/contact" element={<Contact/>} />
            <Route path="/sobremi" element={<Sobremi/>} />
            <Route path="/profile/:name" element={<Profile/>} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
