import './components/styles.css';
import Home from './components/Home/Home';
import { BrowserRouter,Route , Routes } from 'react-router-dom';
import AllProducts from './components/AllProducts/AllProducts.jsx';
import ProductDetail from './components/AllProducts/ProductDetail';
import About from './components/About.jsx';
import SignUp from './components/Registration/SignUp.jsx';
import LogIn from './components/Registration/LogIn.jsx';
import Cart from './components/cart/Cart.jsx'

function App() {
  return (
<div>
  <BrowserRouter>
  <Routes>
    <Route path = '/' element = {<Home/>}/>
    <Route path = '/about' element = {<About/>}/>
    <Route path  = '/all-products' element = {<AllProducts/>}/>
    <Route path = '/product-details/:productId' element = {<ProductDetail/>}/>
    <Route path = '/signup' element = {<SignUp/>}/>
    <Route path = '/login' element = {<LogIn/>}/>
    <Route path = '/cart' element = {<Cart/>}/>
  </Routes>
  </BrowserRouter>

</div>  
);
}

export default App;
