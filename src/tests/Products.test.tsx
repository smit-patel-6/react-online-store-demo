import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Product from '../Pages/Product';
import store from '../store';

const renderComponent = (component: any) => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                {component}
            </Provider>
        </BrowserRouter>
    )
}

describe('Products Testing..', () => {
    test('Product page have title Product page?', () => {
        renderComponent(<Product />)

        const title = screen.getByTestId('producttitle');
        expect(title).toHaveTextContent('Product Page')
    })

    test('Products page have Add Product Button and Search Bar ?', async () => {
        renderComponent(<Product />)

        const addProdBtn = await screen.getByTestId('addprodbtn') as HTMLInputElement;
        const searchBar = await screen.findByPlaceholderText('Search Campaign');

        expect(addProdBtn).toHaveTextContent('Add Product');
        expect(searchBar).toHaveClass('searchproduct');
    })
})