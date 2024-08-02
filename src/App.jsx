import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import AddEditUser from './components/AddEditUser';
import ViewUserDetails from './components/ViewUserDetails';


 const App = () => {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/add-user' element={<AddEditUser/>} />
        <Route path='/edit-user/:id' element={<AddEditUser/>} />
        <Route path='/view-user/:id' element={<ViewUserDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;