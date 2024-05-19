import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'
 
 
 const App = () => {
   return (
     <div>
    <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register/>} />
         


      </Routes>

     </div>
   )
 }
 
 export default App