'use client';
import React, { useState } from 'react';
import { Container } from '@mui/material';

import { IProductsProps } from './types';
import productDataTR from '@app/product-data/product-data-tr.json';
import productDataEN from '@app/product-data/product-data-en.json';
import { IProducts } from '@components/products-content/types';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

const LazyProducts = dynamic(() => import('@/components/products-content'));

const Products: React.FC<IProductsProps> = ({ locale }) => {
  const t = useTranslations('Products');
  const [data, setData] = useState<IProducts>(locale === 'tr' ? productDataTR : productDataEN);
  const [showProducts, setShowProducts] = useState<boolean>(true);

  function renderPreviewProducts() {
    return (
      <Container maxWidth="xl">
        <div className="products-preview">
          {data.data.map((category, index) => (
            <div className="products-preview-image" key={index}>
              <div className="products-preview-image-title">{category.category}</div>
              <Image
                src={`/images/products/${category.categoryImgName}`}
                alt={category.category}
                sizes="100%"
                fill
                placeholder="blur"
                blurDataURL={`/images/products/${category.categoryImgName}`}
              />
            </div>
          ))}
          <div className="products-preview-button">
            <button type="button" onClick={() => setShowProducts(true)}>
              {t('allView')}
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <div className="products-layout" id="products">
      <Container maxWidth="xl" className="products">
        <div className="products-header">
          <h2>{t('title')}</h2>
          <p>{t('text')}</p>
        </div>
        {!showProducts ? renderPreviewProducts() : <LazyProducts locale={locale} />}
      </Container>
    </div>
  );
};

export default Products;
