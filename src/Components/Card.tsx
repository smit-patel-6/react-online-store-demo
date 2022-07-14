import React from 'react'
import { productsType } from '../Reducers/reducers';
import { useDispatch } from 'react-redux'
import '../assets/css/Card.css';
import { AddToCart } from '../Actions/actions';
import { useNavigate } from 'react-router-dom';

interface cardPropsType {
    product: productsType
}

const Card: React.FC<cardPropsType> = (props) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id, firstname, lastname, category, description, price, imgUrl } = props.product;

    const addtocart = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>,product:productsType) => {
        e.preventDefault();
        dispatch(AddToCart(product))
        alert('Product Successfully Added to Cart');
        navigate('/cart')
    }

    return (
        <>
            <div className="card">
                <img className="card-img-top" src={imgUrl} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title prodname">{firstname} {lastname}</h4>
                    <p className="card-text des">{description}</p>
                        <span>MRP</span><p>₹{price}</p>
                    <div className="d-flex justify-content-center">
                        <button onClick={(e) => addtocart(e,props.product)} className="btn mt-3 cartbtn">ADD TO CART</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card