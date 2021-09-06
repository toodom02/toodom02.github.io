import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbars } from './components/Navbar';
import { Home } from './components/Home';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { FormContact } from './components/FormContact';

function App() {
  return (
    <div className="App">
      <Navbars />

      <div className="main">
        <Home />

        <About />

        <Projects />

        <FormContact />

      </div>

    </div>
  );
}

export default App;
