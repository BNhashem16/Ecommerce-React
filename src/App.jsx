import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainLayout from 'layout/Main/MainLayout';
import Register from 'components/Register/Register';
import Cart from 'components/Cart/Cart';
import NotFound from 'components/NotFound';

function App() {
  return (
    <>
    <Routes>

      <Route path="" element={<MainLayout />} >
                    {/* <Route index element={<FeaturedProductComponent />} /> */}
        <Route path="register" element={<Register />} />
        <Route path="cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Route>


    </Routes>
    </>
  );
}

export default App;
