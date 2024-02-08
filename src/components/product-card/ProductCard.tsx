import Image from 'next/image';
import React from 'react';

const ProductCard = () => {
  return (
    <div className="product-card">
      <Image src="/images/products/chicken.jpg" alt="Product image" sizes="100%" fill />
    </div>
  );
};

export default ProductCard;
