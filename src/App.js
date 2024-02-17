import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Checkout from './components/Checkout';
import Success from './components/Success';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/success' element= {<Success/>} />
      </Routes>
    </div>
  );
}

export default App;
