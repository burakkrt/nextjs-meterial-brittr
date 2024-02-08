import Image from 'next/image';
import React, { useState } from 'react';
import ProductCard from '@components/product-card';
import productDataTR from '@app/product-data/product-data-tr.json';
import productDataEN from '@app/product-data/product-data-en.json';
import { IProductsContentProps, IProducts } from './types';

const ProductsContent: React.FC<IProductsContentProps> = ({ locale }) => {
  const [selectCategory, setSelectCategory] = useState<string>('all');
  const [products, setProducts] = useState<IProducts>(
    locale === 'tr' ? productDataTR : productDataEN
  );

  const allCategoryDescTR =
    'Firmamız, en kaliteli ve lezzetli gıda ürünlerini müşterilerimize sunarak sağlıklı ve keyifli yemek deneyimleri yaşatmayı amaçlamaktadır. Geniş ürün yelpazemiz, çeşitli damak zevklerine ve beslenme ihtiyaçlarına uygun seçenekler sunar. Meyve ve sebzelerimiz, taze ve doğal yetiştirme yöntemleriyle elde edilir ve vitamin, mineral ve lif bakımından zengindir. Taze deniz ürünleri, yüksek kaliteli balıkları ve kabuklu deniz hayvanlarını içerir ve sağlıklı protein kaynağıdır. Et ürünlerimiz, en taze ve kaliteli etleri içerir ve çeşitli kesimlerde ve işleme şekillerinde sunulur. Ayrıca, şarküteri ürünleri, dondurulmuş gıdalar, konserve ürünler, soslar, dondurulmuş patatesler, yumurta ürünleri ve daha birçok seçenek de mevcuttur. Her bir ürün, en iyi kalite standartlarına uygun olarak üretilir ve hijyenik koşullarda işlenir.';

  const allCategoryDescEN =
    'Our company aims to provide the highest quality and most delicious food products to our customers, offering them healthy and enjoyable dining experiences. Our extensive range of products offers a variety of flavors and meets various nutritional needs. Our fruits and vegetables are obtained through fresh and natural cultivation methods, ensuring they are rich in vitamins, minerals, and fiber. Fresh seafood includes high-quality fish and shellfish, serving as a healthy source of protein. Our meat products contain the freshest and highest quality meats, available in various cuts and processing methods. Additionally, we offer a variety of options such as deli products, frozen foods, canned goods, sauces, frozen potatoes, egg products, and many more. Each product is produced according to the highest quality standards and processed under hygienic conditions.';

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
        <span className="products-content-sidebar-title">Product Category</span>
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
          {selectCategory === 'all' && locale === 'en'
            ? allCategoryDescEN
            : selectCategory === 'all' && locale === 'tr'
              ? allCategoryDescTR
              : products.data.find((data) => data.category === selectCategory)?.categoryDesc}
        </p>
      </div>
    </div>
  );
};

export default ProductsContent;
