import { render, screen } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ProductList from "../Pages/ProductList";
import store from "../store";

const renderComponent = (component:any) => {
    render (
        <BrowserRouter>
            <Provider store={store}>
                {component}
            </Provider>
        </BrowserRouter >
    )
}

describe('Product List Testing...', () => {
    test("Product list should have title 'Product List' ?", async () => {
        renderComponent(<ProductList />)

        const title = screen.getByTestId('title');

        expect(title).toHaveTextContent('Product List')
    })

    test("Products Have 'Add to Cart' Button ?", async () => {
        renderComponent(<ProductList />)

        const btnList = await screen.findAllByTestId('addtocartbtn')
        btnList.map((btn) => {
            expect(btn).toHaveTextContent('ADD TO CART')
        })
    })
})