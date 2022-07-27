import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PropType{
    Component: React.FC
}

const ProtectedRoute = ({ Component }:PropType) => {

    const navigate = useNavigate();
    useEffect(()=>{
        let login = localStorage.getItem('login')
        if(login !== 'true'){
            navigate('/login')
        }
    },[])

  return (
    <>
        <Component />
    </>
  )
}

export default ProtectedRoute