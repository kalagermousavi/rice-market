import { useEffect, useState } from "react";

function Cart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count === 3) {
      console.log("سبد خرید به ۳ محصول رسید");
    }
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
