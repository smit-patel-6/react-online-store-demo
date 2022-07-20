export interface usersType {
    firstname: string
    lastname: string
    email: string
    password: string
}

export interface productsType {
    id: number
    firstname: string
    lastname: string
    category: string
    description: string
    price: string
    imgUrl: string
}

export interface cartType extends productsType {
    quantity: number
}

export interface initType {
    users: usersType[],
    products: productsType[],
    cart: cartType[]
}

interface actionType {
    type: string
    payload: any
}

export const initialState: initType = {
    users: [{
        firstname: "xyz",
        lastname: "",
        email: "xyz@gmail.com",
        password: "xyzpass"
    }],
    products: [
        {
            id: 1,
            firstname: "iPhone",
            lastname: "13",
            category: "smartphones",
            description: "A14 bionic chip",
            price: "100000",
            imgUrl: 'https://images-eu.ssl-images-amazon.com/images/I/3150P3KQFlL._SY445_SX342_QL70_FMwebp_.jpg'
        },
        {
            id: 2,
            firstname: "HP",
            lastname: "15s",
            category: "laptops",
            description: "8 GB RAM",
            price: "54290",
            imgUrl: 'https://images-eu.ssl-images-amazon.com/images/I/419CsUXodAL._SX300_SY300_QL70_FMwebp_.jpg'
        },
        {
            id: 3,
            firstname: "Galaxy",
            lastname: "M53",
            category: "smartphones",
            description: "128GB ROM",
            price: "500",
            imgUrl: 'https://m.media-amazon.com/images/I/81Bf1rWLA+L._SX522_.jpg'
        },
        {
            id: 4,
            firstname: "Fireboltt",
            lastname: "Ninja3",
            category: "electronics",
            description: "100 Cloud Based WatchFaces",
            price: "1999",
            imgUrl: 'https://m.media-amazon.com/images/I/71+OKgerhIL._SX522_.jpg'
        },
        {
            id: 5,
            firstname: "Crystal",
            lastname: "4K",
            category: "electronics",
            description: "Smart LED TV",
            price: "33990",
            imgUrl: 'https://m.media-amazon.com/images/I/71OENr3lFxL._SX522_.jpg'
        },
        {
            id: 6,
            firstname: "iPhone",
            lastname: "12",
            category: "smartphones",
            description: "A13 Bionic Chip",
            price: "58900",
            imgUrl: 'https://m.media-amazon.com/images/I/71cQWYVtcBL._SX466_.jpg'
        }
    ],
    cart: []
}


export const reducer = (state: initType = initialState, action: actionType) => {
    switch (action.type) {
        case 'SET_USERS':
            return {
                users:[...state.users,...action.payload],
                products:[...state.products],
                cart:[...state.cart]
            }
        case 'ADD_USER':
            return {
                users: [...state.users, action.payload],
                products: [...state.products],
                cart: [...state.cart]
            }

        case 'UPDATE_PRODUCT':
            state.products.map((item) => {
                if (item.id === action.payload.id) {
                    item.firstname = action.payload.firstname;
                    item.lastname = action.payload.lastname;
                    item.category = action.payload.category;
                    item.description = action.payload.description;
                    item.imgUrl = action.payload.imgUrl;
                }
            })

            return { ...state }

        case 'ADD_PRODUCT':
            return {
                users: [...state.users],
                products: [...state.products, action.payload],
                cart: [...state.cart]
            }

        case 'REMOVE_PRODUCT':
            return {
                users: [...state.users],
                products: [...state.products.filter((value) => value.id !== action.payload.id)],
                cart: [...state.cart]
            }

        case 'ADD_TO_CART':
            if (state.cart.length === 0) {
                action.payload.quantity = 1
                return {
                    users: [...state.users],
                    products: [...state.products],
                    cart: [...state.cart, action.payload]
                }
            } else{
                let bool = false;
                state.cart.map((item) => {
                    if (item.id === action.payload.id) {
                        item.quantity += 1;
                        bool = true;
                    }
                })

                if (bool){
                    return {
                        users: [...state.users],
                        products: [...state.products],
                        cart: [...state.cart]
                    }
                } else {
                    action.payload.quantity = 1
                    return {
                        users: [...state.users],
                        products: [...state.products],
                        cart: [...state.cart, action.payload]
                    }
                }   
            }
        
        case "ADD_QTY":
            state.cart.map((item) => {
                if (item.id === action.payload.product.id){
                    item.quantity += 1;
                    item.price = (parseInt(item.price) + parseInt(action.payload.price)).toString();
                }
            })

            return {
                users:[...state.users],
                products:[...state.products],
                cart:[...state.cart]
            }

        case 'SUB_QTY':
            state.cart.map((item) => {
                if (item.id === action.payload.product.id && item.quantity > 0){
                    item.price = (parseInt(item.price) - parseInt(action.payload.price)).toString();
                    item.quantity = item.quantity - 1;
                }
            })

            return {
                users:[...state.users],
                products:[...state.products],
                cart:[...state.cart]
            }
        
        case 'PLACE_ORDER':
            return {
                users:[...state.users],
                products:[...state.products],
                cart:[]
            }
        
        case "REMOVE_FROM_CART":
            return {
                users:[...state.users],
                products:[...state.products],
                cart:[...state.cart.filter((item) => item.id !== action.payload.id)]
            }

        default:
            return state;
    }
}