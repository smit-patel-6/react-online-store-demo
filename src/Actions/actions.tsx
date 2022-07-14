
import { cartType, productsType, usersType } from "../Reducers/reducers";

export const addUser = (user:usersType) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

export const updateProduct = (product:productsType) => {
    return {
        type: 'UPDATE_PRODUCT',
        payload: product
    }
}

export const addProduct = (product:productsType) => {
    return {
        type: 'ADD_PRODUCT',
        payload: product
    }
}

export const removeProduct = (product:productsType) => {
    return {
        type: 'REMOVE_PRODUCT',
        payload: product
    }
}

export const AddToCart = (product:productsType) => {
    return {
        type:"ADD_TO_CART",
        payload: product
    }
}
export const addQuantity = (product:any) => {
    return {
        type: "ADD_QTY",
        payload: product
    }
}

export const subQuantity = (product:any) => {
    return {
        type: "SUB_QTY",
        payload: product
    }
}

export const placeOrder = () => {
    return {
        type: 'PLACE_ORDER'
    }
}