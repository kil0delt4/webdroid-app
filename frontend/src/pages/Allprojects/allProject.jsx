import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductDetailsPage() {
  const [productDetails, setProductDetails] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/project/allproject")
      .then((res) => {
        setProductDetails(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {productDetails.map((product) => (
        <div key={product._id}>
          <h2>Name: {product.name}</h2>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          {/* Render other details as well */}
        </div>
      ))}
    </div>
  );
}

export default ProductDetailsPage;
