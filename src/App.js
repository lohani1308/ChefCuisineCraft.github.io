import './App.css';
import Navbar from './components/Navbar/Navbar';
import Register from './components/Register/Register';
import LoginOverlay from './components/Login/LoginOverlay';
import Chefs from './components/Chefs/Chefs';
import Carousel from './components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel />
      <Chefs />
    </div>
  );
}

export default App;
