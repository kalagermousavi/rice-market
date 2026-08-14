import { useEffect, useState } from "react";

function ProductList() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("ProductList mounted");

    return () => {
      console.log("ProductList unmounted");
    };
  }, []);

  return (
    <section>
      <h2>محصولات برنج</h2>
      <p>تعداد: {count}</p>

      <button onClick={() => setCount(count + 1)}>اضافه کردن</button>
    </section>
  );
}

export default ProductList;
