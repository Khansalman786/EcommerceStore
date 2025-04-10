import "./App.css"
import Home from "./page/Home"
import LoginPage from "./page/loginPage"
import SignupPage from "./page/signupPage"
import { createBrowserRouter, RouterProvider } from "react-router"
import React from "react"
import CartPage from "./page/CartPage"
import CheckOut from "./page/CheckOut"
import ProductDetailsPage from "./page/ProductDetailsPage"
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/signup",
      element: <SignupPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/checkout",
      element: <CheckOut />,
    },
    // Product details Page not declare yet
    {
      path: "/product-details",
      element: <ProductDetailsPage />,
    },
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
