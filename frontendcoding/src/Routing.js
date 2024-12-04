import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './Components/SignUp'
import SignIn from './Components/SignIn'
import Home from './Components/Home'
import Books from './Components/Books'
import AddBook from './Components/AddBook'
import UpdateBook from './Components/UpdateBook'
import DeleteBook from './Components/DeleteBook'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/books" element={<Books />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/updatebook" element={<UpdateBook />} />
        <Route path="/deletebook" element={<DeleteBook />} />

    </Routes>
  )
}

export default Routing