
import './App.css';
import axios from 'axios';
import Footer from './pages/Footer/Footer';
import Home from './pages/Home/Home';
import Midle from './pages/Home_header2/Midle';

function App() {
  return (
    <div className="App">
         <Home />
         <Midle />
         <Footer />
         
    </div>
  );
}

export default App;
