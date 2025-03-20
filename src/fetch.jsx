import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";

const FetchExample = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fake Store Products (Fetch API)</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} width="100" />
            <p>Price: ${product.price}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FetchExample;
