import React from 'react';
import Navbar from '../Components/Navbar';
import '../assets/css/Login.css';
import Leftpanel from '../Components/Leftpanel';
import Rightpanel from '../Components/Rightpanel';

const Login = () => {
  return (
    <div>
      <div className="row">
        <div className="col-4 leftpanel d-grid justify-content-center">
          <Leftpanel />
        </div>
        <div className="col-8">
          <Rightpanel />
        </div>
      </div>
    </div>
  )
}

export default Login