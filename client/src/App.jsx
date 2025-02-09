import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Product from './pages/Product';
import Order from './pages/Order';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Logout from './pages/Logout';
import Navbar from './components/Navbar';
import Admin from './pages/Admin';
import Cart from './pages/Cart';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/cart' element={<Cart />}/>
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App