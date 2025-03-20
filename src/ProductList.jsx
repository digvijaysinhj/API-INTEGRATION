import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./redux/ProductSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h2>Fake Store Products (Redux Toolkit) </h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading &&
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>Price: ${product.price}</p>
          </div>
        ))}
    </div>
  );
};

export default ProductList;
