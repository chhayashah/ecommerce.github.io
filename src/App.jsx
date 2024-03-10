// import React from 'react'
import { BrowserRouter as Router,Route,Routes, Navigate } from "react-router-dom"
import Home from "./pages/home/Home"
import Order from "./pages/order/Order"
import Cart from "./pages/cart/Cart"

import NoPage from "./pages/nopage/NoPage"
import MyState from "./context/data/myState";
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import ProductInfo from "./pages/productInfo/ProductInfo"
import Dashboard from "./pages/admin/dashboard/Dashboard"
import AddProduct from "./pages/admin/page/AddProduct"
import UpdateProduct from "./pages/admin/page/UpdateProduct"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <MyState>
        <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Order" element={
        <ProtectedRoute>
          <Order/>
        </ProtectedRoute>
      }/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Dashboad" element={
        <ProtectdRouteForAdmin>
          <Dashboard/>
        </ProtectdRouteForAdmin>
      }/>
      <Route path="/login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      <Route path="productinfo:id" element={<ProductInfo/>}/>
      <Route path="addproduct" element={
        <ProtectdRouteForAdmin>
          <AddProduct/>
        </ProtectdRouteForAdmin>
      }/>
      <Route path="updateproduct" element={
        <ProtectdRouteForAdmin>
          <UpdateProduct/>
        </ProtectdRouteForAdmin>
      }/>
      <Route path="/*" element={<NoPage/>}/>
    </Routes>
    <ToastContainer/>
   </Router>
    </MyState>
   
  )
}

export default App;

// user

export const ProtectedRoute = ({children}) => {
  const user = localStorage.getItem('user')
  if(user){
    return children
  }else{
    return <Navigate to={'/login'}/>
  }
}

// admin

const ProtectdRouteForAdmin = ({children}) => {
  const admin = JSON.parse(localStorage.getItem('user'))

  if(admin.user.email === 'kiran@1234'){
    return children
  }
  else{
    return <Navigate to={'/login'}/>
  }
}