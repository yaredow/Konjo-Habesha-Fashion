import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import AppLayout from './ui/AppLayout';
import { DarkModeProvider } from './context/darkModeContext';
import { SearchFormProvider } from './context/searchFormContext';
import { CartProvider } from './context/cartContext';
import PageNotFound from './ui/PageNotFound';
import { Toaster } from 'react-hot-toast';
import ProductDetail from './features/product/ProductDetail';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import Home from './ui/Home';
import Account from './pages/Account';
import Login from './features/account/Login';
import Signup from './features/account/Signup';
import ForgotPassword from './features/account/ForgotPassword';
import ResetPassword from './features/account/ResetPassword';
import UserDetails from './features/account/UserDetails';
import UpdateUserData from './features/account/UpdateUserData';
import ProductForm from './ui/productForm';

function App() {
  return (
    <DarkModeProvider>
      <SearchFormProvider>
        <CartProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="create-product" element={<ProductForm />} />
                <Route path="cart" element={<Cart />} />
                <Route path="order" element={<Order />} />
                <Route path="product/:id" element={<ProductDetail />} />
                <Route path="contact-us" element={<ContactUs />} />
                <Route path="about-us" element={<AboutUs />} />
                <Route path="account" element={<Account />}>
                  <Route path="signin" element={<Login />} />
                  <Route path="user-details" element={<UserDetails />} />
                  <Route path="signup" element={<Signup />} />
                  <Route path="forgot-password" element={<ForgotPassword />} />
                  <Route path="reset-password" element={<ResetPassword />} />
                  <Route path="update-account" element={<UpdateUserData />} />
                </Route>
              </Route>
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </BrowserRouter>
          <Toaster
            position="top-center"
            gutter={12}
            containerStyle={{ margin: '8px' }}
            toastOptions={{
              success: {
                duration: 3000,
              },
              error: {
                duration: 3000,
              },
              style: {
                fontSize: '16px',
                maxWidth: '500px',
                padding: '16px 24px',
                backgroundColor: ' bg-gry-700',
                color: ' blue-500',
              },
            }}
          />
        </CartProvider>
      </SearchFormProvider>
    </DarkModeProvider>
  );
}

export default App;
