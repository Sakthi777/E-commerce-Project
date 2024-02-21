import React from "react";
import ProductCard from "../../pages/user/productCard";

const ProductGrid = ({ products }) => {
  return (
    <div className="product-container">
      <div className="productTitle">Recently Sold Items</div>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imgSrc={product.imgSrc}
            imageSlider={product.imageSlider}
            rating={product.rating}
            productName={product.productName}
            oldPrice={product.oldPrice}
            newPrice={product.newPrice}
            setNew={product.setNew}
            setSale={product.setSale}
            discountPercentage={product.discountPercentage}
            productDetails={product.productDetails}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
