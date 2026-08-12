import { useEffect, useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count updated:", count);
  }, [count]);

  return (
    <section>
      <h2>سبد خرید</h2>
      <p>تعداد محصول: {count}</p>
      <button onClick={() => setCount(count + 1)}>افزایش تعداد</button>
    </section>
  );
}

export default Cart;
