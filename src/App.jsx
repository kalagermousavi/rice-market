import ShoppingCart from "./components/ShoppingCart";
import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(true);
  const [showCart, setShowCart] = useState(true);
  return (
    <>
      <Header />
      <button onClick={() => setShowProducts(!showProducts)}>
        نمایش / مخفی کردن محصولات
      </button>
      {showProducts && <ProductList />}

      <button onClick={() => setShowCart(!showCart)}>
        نمایش / مخفی کردن سبد
      </button>
      {showCart && <ShoppingCart />}
      <Cart />
    </>
  );
}

export default App;
