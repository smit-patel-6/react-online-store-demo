import React, { useState } from 'react';
import '../assets/css/Registration.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../Actions/actions';
import { useNavigate } from 'react-router-dom'

const Registration = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passError, setPassError] = useState('')

    const createUser = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (password === confirmPassword) {
            setPassError('');
            let userData = {
                firstname: firstName,
                lastname: lastName,
                email: email,
                password: password
            }

            dispatch(addUser(userData));
            alert('User Created Successfully..');
            navigate('/');
        } else {
            setPassError('Password does not match with Confirm Password');
        }
    }

    return (
        <>
            <div className='registrationfrom'>
                <div className='pos d-flex justify-content-center'>
                    <Link to='/' className='homelink'>Home</Link>
                    <p>&gt;</p>
                    <a className='posactive'>Create an Account</a>
                </div>
                <h2 className='d-flex justify-content-center logtitle mt-3'>Login or Create an Account</h2>
                <div className="container">
                    <form className='regform' onSubmit={createUser}>
                        <h5>Personal Information</h5>
                        <p>Please enter following information to create account</p>

                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="fname">First Name*</label>
                                    <input
                                        type="text"
                                        name="fname"
                                        id="fname"
                                        className='form-control'
                                        onChange={(e) => setFirstName(e.target.value)}
                                        required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="lanme">Last Name*</label>
                                    <input
                                        type="text"
                                        name="lname"
                                        id="lname"
                                        className='form-control'
                                        onChange={(e) => setLastName(e.target.value)}
                                        required />
                                </div>
                            </div>
                        </div>
                        <div className="form-group mt-3 ">
                            <label htmlFor="email">Email Address*</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className='form-control'
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <h5 className='mt-2'>Login Information</h5>
                        <div className="row">
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="pass">Password*</label>
                                    <input
                                        type="password"
                                        name="pass"
                                        id="pass"
                                        className='form-control'
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <label htmlFor="cpass">Confirm Password*</label>
                                    <input
                                        type="password"
                                        name="cpass"
                                        id="cpass"
                                        className='form-control'
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required />
                                </div>
                            </div>
                        </div>
                        {
                            passError ? (
                                <p className='text-danger mt-2'>{passError}</p>
                            ) : (<></>)
                        }
                        <input type="submit" value="Register" className='btn regbtn mt-3' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Registration;