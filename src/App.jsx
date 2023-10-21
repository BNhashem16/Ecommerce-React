import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from 'layout/Main/MainLayout'
import Register from 'components/Register/Register'
import Cart from 'components/Cart/Cart'
import Login from 'components/Login/Login'
import { TokenContextProvider } from 'context/TokenContext'
import Product from 'components/Product/Product'
import NotFound from 'components/NotFound/NotFound'
import ProtectedRoute from 'components/ProtectedRoute/ProtectedRoute'
import Home from 'components/Home/Home'
import ProductDetail from 'components/ProductDetail/ProductDetail'

function App() {
  return (
    <TokenContextProvider>
      <Routes>
        <Route path="" element={<MainLayout />}>
          {/* <Route index element={<FeaturedProductComponent />} /> */}
          <Route
            path="/"
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route
            path="cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />
          <Route
            path="products"
            element={
              <ProtectedRoute>
                <Product />
              </ProtectedRoute>
            }
          />

          <Route
            path="product/:id"
            element={
                <ProductDetail />
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </TokenContextProvider>
  )
}

export default App
