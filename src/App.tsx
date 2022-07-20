import React, { useEffect } from 'react';
import Routing from './Routing';
import { useDispatch } from 'react-redux'
import { fetchUsers } from './Actions/actions';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchUsers())
  },[])
  return (
      <div className="App">
        <Routing />
      </div>
  );
}

export default App;
