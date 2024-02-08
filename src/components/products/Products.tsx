import React from 'react';
import { Container } from '@mui/material';
import ProductCard from '@components/product-card';

const Products = () => {
  return (
    <div className="products-layout">
      <Container maxWidth="xl" className="products">
        <div className="products-header">
          <h2>Products</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, alias.
            Temporibus nostrum aliquid nihil voluptatum id, iure maiores dolores iusto molestiae
            placeat odit perspiciatis.
          </p>
        </div>
        <div className="products-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Container>
    </div>
  );
};

export default Products;
