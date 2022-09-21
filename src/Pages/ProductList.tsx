import React, { useState } from 'react';
import '../assets/css/ProductList.css';
import Navbar from '../Components/Navbar';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import Card from '../Components/Card';
import { useSelector } from 'react-redux'
import { initType, productsType } from '../Reducers/reducers';
import cloneDeep from 'lodash/cloneDeep';


const ProductList = () => {

    const state = useSelector<initType, any>((state) => state);

    const products = state.reducer.products;

    const countPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1)
    const [collection, setCollection] = useState(
        cloneDeep(products.slice(0, countPerPage))
    )
    const updatePage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        const to = countPerPage * pageNumber
        const from = to - countPerPage
        setCollection(
            cloneDeep(products.slice(from, to))
        )
    }
    const cards = (
        collection.map((item: productsType) =>
            <div className='col-3 cardcol' key={item.id}>
                <Card
                    product={item}
                />
            </div>
        )
    )

    const pagination = (
        <Pagination
            pageSize={countPerPage}
            current={currentPage}
            onChange={updatePage}
            total={products.length}
            className="pagination mt-3"
        />
    )

    return (
        <>
            
            <div className="productlist">
                <div className="d-flex justify-content-center productlisttitle">
                    <h1 data-testid="title">Product List</h1>
                </div>
                <div className="container">
                    <div className="row">
                        {cards}
                    </div>
                    <div className="d-flex justify-content-center">
                        {pagination}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList;