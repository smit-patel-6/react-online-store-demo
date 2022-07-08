export interface usersType{
    firstname:string
    lastname:string
    email: string
    password:string
}

export interface productsType{
    firstname: string
    lastname: string
    catagory: string
    description: string
}

export interface initType {
    users: usersType[],
    products: productsType[]
}

interface actionType {
    type: string
    payload: string
}

export const initialState:initType = {
    users: [{
        firstname:"xyz",
        lastname:"",
        email:"xyz@gmail.com",
        password:"xyzpass"
    }],
    products:[{
        firstname:"Product1",
        lastname:"Product Last",
        catagory:"Food",
        description:"This is Food Product"
    },
    {
        firstname:"Product2",
        lastname:"Product2 Last",
        catagory:"Food",
        description:"This is Food Product2"
    }
]
}


export const reducer = (state:initType = initialState,action:actionType) => {
    switch(action.type){
        case 'ADD_USER':
            return {
                users:[...state.users,action.payload]
            }
        default:
            return state;
    }
}