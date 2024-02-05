export interface SimpleDialogProps {
  open: boolean;
  selectedValue: ICountry;
  onClose: (value: ICountry) => void;
  pathname: string;
  locale: string;
}

export interface ICountry {
  name: string;
  code: string;
  emoji: string;
  unicode: string;
  image: string;
}

export interface IRootProps {
  locale: string;
  pathname: string;
  color?: string;
}
