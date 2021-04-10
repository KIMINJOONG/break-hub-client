export interface IProps extends IStyle {
  children: React.ReactNode;
  type: any;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface IStyle {
  color: string;
}
