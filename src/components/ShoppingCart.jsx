import { useEffect, useState } from "react";
function ShoppingCart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("تعداد سبد تغییر کرد:", count);
    return () => {
      console.log("ShoppingCart حذف شد");
    };
  }, [count]);

  return (
    <section>
      <h2>سبد خرید</h2>
      <p>تعداد برنج: {count}</p>
      <button onClick={() => setCount(count + 1)}>اضافه کردن</button>
    </section>
  );
}

export default ShoppingCart;
