import React from 'react'
import Navbar from '../Components/Navbar'
import '../assets/css/Product.css'
import Table from '../Components/Table'

const Product = () => {
    return (
        <>
            <Navbar />
            <div className="productpage">
                <h2 className='d-flex justify-content-center mt-3 producttitle'>Product Page</h2>
                <Table />
            </div>
        </>
    )
}

export default Product