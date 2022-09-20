import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Navbar';
import '../assets/css/Cart.css';
import Box from '../Components/Box';
import { useDispatch, useSelector } from 'react-redux';
import { cartType, initType } from '../Reducers/reducers';
import { placeOrder } from '../Actions/actions';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

    const state = useSelector<initType, any>((state) => state);
    const cartData = state.reducer.cart;
    const [totalPrice, setTotalPrice] = useState(0);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        let price = 0;
        cartData.map((item: cartType) => {
            price += parseInt(item.price);
            setTotalPrice(price);
        })
    }, [cartData])

    const placeOrd = () => {
        alert('Thank You For Purchasing...!!')
        dispatch(placeOrder())
        navigate('/productlist')
        
    }

    return (
        <>
            
            <div className="cart">
                <div className="d-flex justify-content-center">
                    <h1 className='carttitle'>Cart Page</h1>
                </div>
                {
                    cartData.length !== 0? (
                        <>
                            <div className="cartlist mt-3">
                                <div className="row">
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <div className="row">
                                            <div className="col-6">
                                                <h6 className='classtext'>My Shopping Bag({cartData.length} items)</h6>
                                            </div>
                                            <div className="col-5">
                                                <h6 className='classtext'>Total Price: {totalPrice} Rs.</h6>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-4"></div>
                                    <div className="col-4">
                                        <div className=" d-block justify-content-center productblock">
                                            {
                                                cartData?.map((item: cartType) =>
                                                    <Box product={item} />
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4 mt-3">
                                    <button className='btn orderbtn' onClick={placeOrd}>Place An Order</button>
                                </div>
                                <div className="col-4"></div>
                            </div>
                        </>
                    ) : (
                        <div className="d-flex justify-content-center mt-5">
                            <h4 className='carttitle'>Empty Cart</h4>
                        </div>
                    )
                }

            </div>
        </>
    )
}

export default Cart