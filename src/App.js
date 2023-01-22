import React, { useState } from 'react';
import './App.css';
import Home from './Component/Homepage/Home';
import Register from './Component/Registerpage/Register';
import Login from './Component/Loginpage/Login';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  const [user,setLoginUser]=useState({
    //name:"",
    //email:"",
    //password:""
  })
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element=
            {
              user && user._id?<Home setLoginUser={setLoginUser} />:<Login setLoginUser={setLoginUser}/>
            }>
            
            
            </Route>
          <Route path='/register' element={<Register/>}></Route>
          <Route path='/login' element={<Login setLoginUser={setLoginUser}/>}>
            
            </Route>
        </Routes>
      </Router>    
    </div>
  );
}

export default App;
