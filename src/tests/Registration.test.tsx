import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Registration from "../Pages/Registration";
import store from "../store";

const renderComponent = (component:any) => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                {component}
            </Provider>
        </BrowserRouter>
    )
}

describe('Registration Page Testing...', () => {

    test("Registration Page contain 'Login or Create an Account' title?",async ()=>{
        renderComponent(<Registration />)

        expect(screen.getByTestId('regTitle')).toHaveTextContent('Login or Create an Account')
    })

    test("All Input Fields are requied on Registration Page?",async ()=>{
        renderComponent(<Registration />)

        expect(await screen.findByPlaceholderText('Enter First Name')).toHaveAttribute('required')
        expect(await screen.findByPlaceholderText('Enter Last Name')).toHaveAttribute('required')
        expect(await screen.findByPlaceholderText('Enter Email')).toHaveAttribute('required')
        expect(await screen.findByPlaceholderText('Enter Password')).toHaveAttribute('required')
        expect(await screen.findByPlaceholderText('Confirm Password')).toHaveAttribute('required')
    })

    test('Password and Confirm Password Validation is there?', async ()=>{
        renderComponent(<Registration />)
        userEvent.type(await screen.findByPlaceholderText('Enter First Name'),'xyz')
        userEvent.type(await screen.findByPlaceholderText('Enter Last Name'),'abc')
        userEvent.type(await screen.findByPlaceholderText('Enter Email'),'xyz@gmail.com')
        userEvent.type(await screen.findByPlaceholderText('Enter Password'),'123')
        userEvent.type(await screen.findByPlaceholderText('Confirm Password'),'1234')

        fireEvent.click(await screen.getByTestId('regbtn'))

        expect(await screen.getByTestId('regError')).toHaveTextContent('Password does not match with Confirm Password')
    })
})