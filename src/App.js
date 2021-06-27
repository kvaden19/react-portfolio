import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './pages/About';
import Projects from './pages/Projects';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar id='sidebar'/>
        <div id='main'>
          <Route exact path='/' component={About} />
          <Route exact path='/about' component={About} />
          <Route exact path='/projects' component={Projects} />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
