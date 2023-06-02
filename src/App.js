import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Products from "./pages/Products";
import Header from "./components/Header/Header";
import MockmanTesting from "./pages/MockmanTesting";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import RequiresAuth from "./components/RequiresAuth";
import Cart from "./pages/Cart/Cart.jsx";
import Wishlist from "./pages/Wishlist/Wishlist.jsx";
import UserProfile from "./pages/UserProfile/UserProfile";
import ProductDetail from "./pages/ProductDetail/ProductDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/mockman" element={<MockmanTesting />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route 
          path="/profile"
          element={
            <RequiresAuth>
              <UserProfile />
            </RequiresAuth>
          }
        />
        <Route 
          path="/products/:productId"
          element={
          <RequiresAuth>
            <ProductDetail />
          </RequiresAuth>}
        />
      </Routes>
    </div>
  );
}

export default App;
