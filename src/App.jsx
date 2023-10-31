import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Cart from './pages/Cart/Cart'
import { productsData } from './api/Api'
import Product from './components/Product/Product'
import Login from './pages/Login/Login'

const Layout = () =>{
  return (
    <div>
      <Navbar/>
      <ScrollRestoration/>
    <Outlet/>
    <Footer/>
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children : [
      {
        path : "/",
        element : <Home/>,
        loader : productsData
      },
      {
        path: "/product/:id",
        element : <Product/>
      },
      {
        path : '/cart',
        element : <Cart/>
      },
      {
        path : "/login",
        element : <Login/>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App