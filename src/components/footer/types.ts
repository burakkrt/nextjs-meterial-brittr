export interface IFooterProps {
  pages?: ILangHeader[];
  locale: string;
}

export interface ILangHeader {
  label: string;
  path: string;
}
