import React from 'react'
import Home from './Page/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>

    {/* <Home/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App