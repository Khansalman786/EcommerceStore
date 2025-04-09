import "./App.css"
import Home from "./page/Home"
import LoginPage from "./page/loginPage"
import SignupPage from "./page/signupPage"
import { createBrowserRouter, RouterProvider } from "react-router"
import React from "react"
import ReactDOM from "react-dom/client"

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
  ])

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
