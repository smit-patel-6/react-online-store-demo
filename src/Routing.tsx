import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';
import AddEditForm from './Pages/AddEditForm';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';

const Routing = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/productlist' element={<ProductList />}/>
            <Route path='/productform' element={<AddEditForm />}/>
            <Route path='/products' element={<Product />}/>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/' element={<Login />}/>
          </Routes>
      </Router>
    </>
  )
}

export default Routing