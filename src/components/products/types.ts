export interface IProductsProps {
  locale?: string;
}

export interface IProducts {
  data: Array<IProduct>;
}

export interface IProduct {
  category: string;
  categoryDesc: string;
  categoryImgName: string;
  products: Array<{ title: string; imgName: string }>;
}
