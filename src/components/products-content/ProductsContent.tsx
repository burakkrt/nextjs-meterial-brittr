import Image from 'next/image';
import React, { useState } from 'react';
import ProductCard from '@components/product-card';
import productDataTR from '@app/product-data/product-data-tr.json';
import productDataEN from '@app/product-data/product-data-en.json';
import { IProductsContentProps, IProducts } from './types';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import { useTranslations } from 'next-intl';

const ProductsContent: React.FC<IProductsContentProps> = ({ locale }) => {
  const t = useTranslations('Products');
  const [products, setProducts] = useState<IProducts>(
    locale === 'tr' ? productDataTR : productDataEN
  );
  const [selectCategory, setSelectCategory] = useState<string>(
    products?.data[0]?.category || 'all'
  );

  const allCategoryDesc = t('allCategoryDesc');
  const allCategoryTitle = t('allCategoryTitle');

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
    <div className="products-content">
      <div className="products-content-sidebar">
        <span className="products-content-sidebar-title">{t('categoryTitle')}</span>
        <ul className="products-content-sidebar-caregory-list">
          {products.data.map((data, index) => (
            <li key={index}>
              <button type="button" onClick={() => hanleSelectCategory(data.category)}>
                <span className={`category-name ${data.category === selectCategory && 'active'}`}>
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
        <ExpandCircleDownIcon className="category-down-icon" />
      </div>
      <div className="products-content-product-list">
        <div className="products-content-product-list-filter">
          {selectCategory !== 'all' && (
            <button onClick={() => setSelectCategory('all')}>{t('clearFilterText')}</button>
          )}
        </div>
        <div className="products-content-product-list-products">{renderProductList()}</div>
      </div>
      <div className="products-content-right-info">
        <h5>{selectCategory === 'all' ? allCategoryTitle : selectCategory}</h5>
        <p>
          {selectCategory === 'all'
            ? allCategoryDesc
            : products.data.find((data) => data.category === selectCategory)?.categoryDesc}
        </p>
      </div>
    </div>
  );
};

export default ProductsContent;
