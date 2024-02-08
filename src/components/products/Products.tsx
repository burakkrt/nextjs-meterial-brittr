'use client';
import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import ProductCard from '@components/product-card';
import Image from 'next/image';
import productDataTR from '@app/product-data/product-data-tr.json';
import productDataEN from '@app/product-data/product-data-en.json';
import { IProductsProps, IProducts } from './types';

const Products: React.FC<IProductsProps> = ({ locale }) => {
  const [selectCategory, setSelectCategory] = useState<string>('all');
  const [products, setProducts] = useState<IProducts>(
    locale === 'tr' ? productDataTR : productDataEN
  );

  const allCategoryDesc =
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam id exercitationem a provident aliquid rem corrupti voluptatum, cupiditate itaque nemo laudantium vel accusamus rerum aliquam enim molestiae, ut incidunt recusandae?';

  const hanleSelectCategory = (category: string) => {
    setSelectCategory(category);
  };

  function renderProductList() {
    if (selectCategory === 'all') {
      return products.data.map((data) => {
        return data.products.map((product, index) => (
          <ProductCard key={index} title={product.title} imgName={product.imgName} />
        ));
      });
    } else {
      const filterProduct = products.data.find((data) => data.category === selectCategory);
      return filterProduct?.products.map((product, index) => (
        <ProductCard key={index} title={product.title} imgName={product.imgName} />
      ));
    }
  }

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
        <div className="products-content">
          <div className="products-content-sidebar">
            <span className="products-content-sidebar-title">Product Category</span>
            <ul className="products-content-sidebar-caregory-list">
              {products.data.map((data, index) => (
                <li key={index}>
                  <button type="button" onClick={() => hanleSelectCategory(data.category)}>
                    <span
                      className={`category-name ${data.category === selectCategory && 'active'}`}>
                      {data.category}
                    </span>
                    <Image
                      src={`/images/products/${data.categoryImgName}`}
                      alt={data.category}
                      fill
                      sizes="100%"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="products-content-product-list">
            <div className="products-content-product-list-filter">
              {selectCategory !== 'all' && (
                <button onClick={() => setSelectCategory('all')}>
                  {locale === 'tr' ? 'Tüm Ürünleri Göster' : 'Show all products'}
                </button>
              )}
            </div>
            <div className="products-content-product-list-products">{renderProductList()}</div>
          </div>
          <div className="products-content-right-info">
            <h5>
              {selectCategory === 'all' && locale === 'tr'
                ? 'Tüm Ürünler'
                : selectCategory === 'all' && locale === 'en'
                  ? selectCategory + ' Products'
                  : selectCategory}
            </h5>
            <p>
              {selectCategory === 'all'
                ? allCategoryDesc
                : products.data.find((data) => data.category === selectCategory)?.categoryDesc}
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Products;
