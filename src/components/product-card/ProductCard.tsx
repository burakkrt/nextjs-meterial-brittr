import Image from 'next/image';
import React from 'react';
import { IProductCardProps } from './types';

const ProductCard: React.FC<IProductCardProps> = ({ title, imgName }) => {
  return (
    <div className="product-card">
      <span className="product-card-title">{title}</span>
      <Image src={`/images/products/${imgName}`} alt={`${title} Image`} sizes="100%" fill />
    </div>
  );
};

export default ProductCard;
