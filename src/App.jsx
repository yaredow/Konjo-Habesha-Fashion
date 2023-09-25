import {
  BrowserRouter,
  Navigate,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import Checkout from "./pages/Checkout";
import Collections from "./pages/Collections";
import AppLayout from "./ui/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="collections" element={<Collections />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<Order />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
