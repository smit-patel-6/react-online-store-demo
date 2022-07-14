import React from 'react';
import '../assets/css/Box.css';
import { cartType, initType, productsType } from '../Reducers/reducers';
import { useSelector, useDispatch } from 'react-redux';
import { addQuantity, subQuantity } from '../Actions/actions';

interface propsType {
    product:cartType
}

const Box = ({product}:propsType) => {

    const dispatch = useDispatch();
    const state = useSelector<initType,any>((state) => state);
    const cartData = state.reducer.cart;
    const products = state.reducer.products;
    
    const addQty = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,product:cartType) => {
        products.map((item:productsType) => {
            if (item.id === product.id){
                dispatch(addQuantity({product:product,price:item.price}))
            }
        })
    }

    const subQty = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,product:cartType) => {
        products.map((item:productsType) => {
            if (item.id === product.id){
                dispatch(subQuantity({product:product,price:item.price}))
            }
        })
    }

    return (
        <>
            <span className="box mt-3">
                <div className="row">
                    <div className="col-3">
                        <img src={product.imgUrl} alt="" className='cartimg'/>
                    </div>
                    <div className="col-9">
                        <div className="row">
                            <div className="col-7">
                                <p className='cartprodname'>{product.firstname}&ensp;{product.lastname}</p>
                            </div>
                            <div className="col-5">
                                <h6 className='price'>{product.price} Rs.</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-7 d-flex">
                                <button className='btn commonbtn' onClick={(e) => subQty(e,product)} disabled={product.quantity === 1? true:false}><span> - </span></button>
                                <input type="text" className="qty form-control" name="qty" id="qty" value={product.quantity} disabled/>
                                <button className='btn commonbtn' onClick={(e) => addQty(e,product)}><span> + </span></button>
                            </div>
                            <div className="col-5">
                                <h6 className='removebtn'>Remove</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </>
    )
}

export default Box