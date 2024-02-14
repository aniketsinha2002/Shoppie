import { Routes,Route } from 'react-router-dom';
import Products from './components/Products';
import Cart from './components/Cart';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element= {<Cart/>} />
      </Routes>
    </div>
  );
}

export default App;
