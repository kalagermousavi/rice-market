import { useEffect } from "react";
function ProductList() {
  useEffect(() => {
    console.log("ProductList mounted");
  }, []);
  return (
    <section>
      <h2>محصولات برنج</h2>
    </section>
  );
}

export default ProductList;
