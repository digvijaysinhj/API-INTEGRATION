import axios from "axios";
import { useEffect, useState } from "react";

const API_URL = "https://fakestoreapi.com/products";

const AxiosExample = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Fake Store Products (Axios)</h2>
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

export default AxiosExample;
