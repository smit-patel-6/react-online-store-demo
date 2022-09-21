import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { useLocation, useNavigate } from 'react-router-dom';
import '../assets/css/AddEditForm.css';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, updateProduct } from '../Actions/actions';
import { initType } from '../Reducers/reducers';

const AddEditForm = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const reduxState = useSelector<initType, any>((state) => state)
  const products = reduxState.reducer.products;
  const state: any = useLocation().state;

  const [id, setID] = useState(state?.id || 0)
  const [fname, setFname] = useState(state?.firstname || "")
  const [lname, setLname] = useState(state?.lastname || "")
  const [ctg, setCtg] = useState(state?.category || "")
  const [desc, setDesc] = useState(state?.description || "")
  const [img, setImg] = useState(state?.imgUrl || "")
  const [price, setPrice] = useState(state?.price || 0)

  const categories = ['electronics', "smartphones", "laptops"]

  const title = (state ? <h1>Edit Product</h1> : <h1>Add Product</h1>);

  const options = (
    <select data-testid='category' name="category" id="category" className='form-control mt-2' onChange={(e) => setCtg(e.target.value)}>
      <option value="">Select Category</option>
      {
        categories.map((value) =>
          value === ctg ? (
            <option value={value} selected>{value}</option>
          ) : (
            <option value={value}>{value}</option>
          )
        )
      }
    </select>
  )

  const updateProd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let productData = {
      id: id,
      firstname: fname,
      lastname: lname,
      category: ctg,
      description: desc,
      price: price,
      imgUrl: img
    }
    dispatch(updateProduct(productData))
    alert('Product is Successfully Updated !!')
    navigate('/products');
  }

  const createProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let lastproduct = products[products.length - 1];
    let newId = lastproduct.id + 1;

    let productData = {
      id: newId,
      firstname: fname,
      lastname: lname,
      category: ctg,
      description: desc,
      price: price,
      imgUrl: img
    }
    dispatch(addProduct(productData))
    alert('Product is Successfully Created !!')
    navigate('/products');
  }

  return (
    <>
      <div className="addeditform">
        <div className="d-flex justify-content-center">
          {title}
        </div>
        <div className="container mt-3">
          <form onSubmit={state ? updateProd : createProduct}>
            <div className="row">
              <div className="col-6">
                <label htmlFor="firstname">First Name*</label>
                <input
                  data-testid='fname'
                  type="text"
                  name="fname"
                  id="fname"
                  value={fname}
                  className="form-control mt-2"
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div className="col-6">
                <label htmlFor="lastname">Last Name*</label>
                <input
                  data-testid='lname'
                  type="text"
                  name="fname"
                  id="fname"
                  value={lname}
                  className="form-control mt-2"
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <label htmlFor="category">Shop by Categories</label>
                {options}
              </div>
              <div className="col-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="des"
                  id="des"
                  className='form-control mt-2'
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <label htmlFor="img">Choose An Image</label>
                <input
                  type="file"
                  name="img"
                  id="img"
                  accept="image/*"
                  className='form-control mt-2'
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="col-6">
                <label htmlFor="price">Price</label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className='form-control mt-2'
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
            </div>
            <input data-testid="saveBtn" type="submit" value="Save" className='btn savebtn' />
            <input data-testid="cancleBtn" type="submit" value="Cancel" className='btn cnlbtn' />
          </form>
        </div>
      </div>
    </>
  )
}

export default AddEditForm