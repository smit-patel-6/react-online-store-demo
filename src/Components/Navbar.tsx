import React from 'react';
import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { initType } from '../Reducers/reducers';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();
    const state = useSelector<initType,any>((state) => state)
    const cart = state.reducer.cart.length;

    const cartPage =(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigate('/cart');
    }
    return (
        <>
            <div className='navbar'>
                <div className='nav1'>
                    <Link to='/'>Login</Link>
                    <span>|</span>
                    <Link to='/registration'>Register</Link>
                    <button onClick={(e) => cartPage(e)} className='btn btn-outline-secondary'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>
                        <span>{cart}</span>Cart
                    </button>
                </div>
            </div>
            <div className="navbar2">
                <input type="text" className="form-control" name="search" id="search" placeholder="𝘞𝘩𝘢𝘵 𝘢𝘳𝘦 𝘺𝘰𝘶 𝘭𝘰𝘰𝘬𝘪𝘯𝘨 𝘧𝘰𝘳..." />
                <button className='btn searchbtn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                    <span>Search</span> 
                </button>
                <button className='btn cancelbtn'>
                    <span>Cancel</span> 
                </button>
            </div>
        </>
    )
}

export default Navbar;