import React, { useEffect, useState } from 'react';
import '../assets/css/Rightpanel.css';
import { useSelector, useDispatch } from 'react-redux';
import { initType, usersType } from '../Reducers/reducers';
import { useNavigate } from 'react-router-dom';

const Rightpanel = () => {

    const navigate = useNavigate()

    useEffect(()=>{
        let login = localStorage.getItem('login')
        
        if(login === 'true'){
            navigate('/');
        }
    },[])

    const mystate = useSelector<initType, any>((state) => state)
    const userList = mystate.reducer.users;

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState(false);


    const Login = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        userList.map((item:usersType) => {
            if (item.email === email && item.password === password){
                setError(false)
                alert('Login Successful')
                localStorage.setItem('email',email)
                localStorage.setItem('password',password)
                localStorage.setItem('login',"true")
                navigate('/')
            } else {
                setError(true)
            }
        })
    }

  return (
    <div className='rightpanal'>
        <div className='pos d-flex'>
            <a>Home</a> 
            <p>&gt;</p> 
            <a className='posactive'>Login</a>
        </div>
        <div className='loginform'>
            <h2>Login or Create Account</h2>
            <form onSubmit={Login} className='form'>
                <h6>Registered Customers</h6>
                <p>If you have account with us, please login.</p>
                <div className='form-group'>
                    <label htmlFor="email">Email Address*</label>
                    <input 
                    data-testid='email'
                    type="email" 
                    className='form-control' 
                    onChange={(e) => setEmail(e.target.value)}
                     />
                </div>
                <div className='form-group'>
                    <label htmlFor="pass">Password</label>
                    <input 
                    data-testid='password'
                    type="password" 
                    className='form-control'
                    onChange={(e) => setPassword(e.target.value)}
                     />
                </div>
                {
                    error?(
                        <p className='text-danger mt-2'>Invalid Email and Password</p>
                    ):(<></>)
                }
                <input type="submit" value="Login" data-testid="login_btn" className='btn loginbtn' />
            </form>
        </div>
    </div>
  )
}

export default Rightpanel