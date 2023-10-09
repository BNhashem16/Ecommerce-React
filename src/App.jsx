import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'layout/Main/MainLayout';
import Register from 'components/Register/Register';
import Cart from 'components/Cart/Cart';
import NotFound from 'components/NotFound';
import Login from 'components/Login/Login';
import { TokenContextProvider } from 'context/TokenContext';

function App() {
  return (
      <TokenContextProvider>
      <Routes>
        <Route path="" element={<MainLayout />}>
          {/* <Route index element={<FeaturedProductComponent />} /> */}
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      </TokenContextProvider>
  )
}

export default App;
