import { useState } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

function App() {
  const [showProducts, setShowProducts] = useState(true);

  return (
    <>
      <Header />
      <button onClick={() => setShowProducts(!showProducts)}>
        نمایش / مخفی کردن محصولات
      </button>
      {showProducts && <ProductList />}
      <Cart />
    </>
  );
}

export default App;
