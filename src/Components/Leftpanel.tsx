import React from 'react';
import '../assets/css/Leftpanel.css';
import { Link } from 'react-router-dom'

const Leftpanel = () => {
  return (
    <>
        <h3 className='lefttitle'>New Customer</h3>
        <div>
            <p className='reg'>Registration is free and easy</p>
        </div>
        <ul className='regpoints'>
            <li>Faster checkout</li>
            <li>Save multiple shipping addresses</li>
            <li>View and track orders and more</li>
        </ul>
        <Link to='/registration' className='btn createbtn pt-2 pb-2'>Create an Account</Link>
    </>
  )
}

export default Leftpanel