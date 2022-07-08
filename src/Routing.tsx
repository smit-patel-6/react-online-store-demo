import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Product from './Pages/Product';

const Routing = () => {
  return (
    <>
      <Router>
          <Routes>
            <Route path='/products' element={<Product />}/>
            <Route path='/registration' element={<Registration />}/>
            <Route path='/' element={<Login />}/>
          </Routes>
      </Router>
    </>
  )
}

export default Routing