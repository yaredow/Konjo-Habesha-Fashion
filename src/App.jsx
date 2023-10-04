import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import AppLayout from "./ui/AppLayout";
import { DarkModeProvider } from "./context/darkModeContext";
import { CartProvider } from "./context/cartContext";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";
import Home2 from "./ui/Home2";
import ProductDetail from "./features/product/ProductDetail";
import Products from "./pages/Products";

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home2 />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart />} />
              <Route path="order" element={<Order />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="product/:id" element={<ProductDetail />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 3000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: " bg-gry-700",
              color: " blue-500",
            },
          }}
        />
      </CartProvider>
    </DarkModeProvider>
  );
}

export default App;
