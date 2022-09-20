import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';
import AddEditForm from './Pages/AddEditForm';
import ProductList from './Pages/ProductList';
import Cart from './Pages/Cart';
import ProtectedRoute from './Components/ProtectedRoute';

const Routing = () => {
  return (
    <>
      {/* <Router> */}
          <Routes>
            <Route path='/cart' element={<ProtectedRoute Component={Cart} />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/productform' element={<ProtectedRoute Component={AddEditForm} />}/>
            <Route path='/products' element={ <ProtectedRoute Component={Product}/> } />
            <Route path='/registration' element={<Registration />}/>
            <Route path='/' element={<ProductList />}/>
          </Routes>
      {/* </Router> */}
    </>
  )
}

export default Routing