import React, { useEffect } from 'react';
import Routing from './Routing';
import { useDispatch } from 'react-redux'
import { fetchUsers } from './Actions/actions';
import Navbar from './Components/Navbar';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
      <div className="App">
        <Navbar />
        <Routing />
      </div>
  );
}

export default App;
