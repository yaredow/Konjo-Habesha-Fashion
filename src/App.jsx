import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Collections from "./pages/Collections";
import AppLayout from "./ui/AppLayout";
import Male from "./features/collections/Men";
import Women from "./features/collections/Women";
import { DarkModeProvider } from "./context/darkModeContext";
import AllProducts from "./features/product/AllProducts";
import { CartProvider } from "./context/cartContext";
import Kids from "./features/collections/Kids";
import PageNotFound from "./ui/PageNotFound";
import { Toaster } from "react-hot-toast";
import Home2 from "./ui/Home2";
import ProductDetail from "./features/product/ProductDetail";

function App() {
  return (
    <DarkModeProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home2 />} />
              <Route path="/" element={<Home2 />} />
              <Route path="/" element={<Home2 />} />
              <Route path="collections" element={<Collections />}>
                <Route index element={<AllProducts />} />
                <Route path="men" element={<Male />} />
                <Route path="women" element={<Women />} />
                <Route path="kids" element={<Kids />} />
              </Route>
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="order" element={<Order />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
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
              duration: 5000,
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
