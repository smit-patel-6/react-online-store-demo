import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import AddEditForm from "../Pages/AddEditForm";
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

describe('Testing AddEdit Form..', () => {
    test('Add/Edit form has all required field ?', async () => {
        renderComponent(<AddEditForm />)

        expect(await screen.getByTestId('fname')).toHaveAttribute('required')
        expect(await screen.getByTestId('lname')).toHaveAttribute('required')
    })

    test('Add/Edit Product Page contain save and cancle button?',async () => {
        renderComponent(<AddEditForm />)

        expect(await screen.getByTestId('saveBtn')).toHaveAttribute('value','Save')
        expect(await screen.getByTestId('cancleBtn')).toHaveAttribute('value','Cancel')
    })

})