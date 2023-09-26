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
import AllProducts from "./features/collections/AllProducts";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="collections" element={<Collections />}>
              <Route index element={<AllProducts />} />
              <Route path="men" element={<Male />} />
              <Route path="women" element={<Women />} />
            </Route>
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<Order />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
