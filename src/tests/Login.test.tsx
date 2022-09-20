import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import Login from "../Pages/Login"
import { Provider } from 'react-redux';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';

const renderComponent = (component: any) => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                {component}
            </Provider>
        </BrowserRouter>
    )
}

describe("Login Component Testing", () => {
    test('Email and Password fields in login page?', async () => {
        renderComponent(<Login />)
        const email = await screen.getByTestId('email')
        const pass = await screen.getByTestId('password')

        expect(email).toHaveAttribute('type', 'email');
        expect(pass).toHaveAttribute('type', 'password');
    })

    test('Login Component have login button?', () => {
        renderComponent(<Login />)
        const loginBtn = screen.getByTestId('login_btn')
        expect(loginBtn).toHaveAttribute('value', 'Login');
    })

    test('Email and Password fields are empty?', async () => {
        renderComponent(<Login />)
        const email = await screen.getByTestId('email')
        const pass = await screen.getByTestId('password')

        expect(email).toBeEmptyDOMElement()
        expect(pass).toBeEmptyDOMElement()
    })

    test('Email Validation is there?',async () => {
        renderComponent(<Login />)

        const email = await screen.getByTestId('email') as HTMLInputElement;
        const pass = await screen.getByTestId('password')
        const loginBtn = screen.getByTestId('login_btn')

        userEvent.type(email,'xyz@gmail')
        userEvent.type(pass,'xyzpass')

        fireEvent.click(loginBtn)

        expect(screen.getByText('Invalid Email and Password')).toBeTruthy()
    })

})