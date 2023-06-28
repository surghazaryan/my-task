import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';


export default function MainRouting() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>     
        <Routes>
            <Route path='/Home' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}
