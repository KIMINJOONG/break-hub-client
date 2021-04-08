export interface IProps extends IStyle {
  id: string;
  name?: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

interface IStyle {
  height: string;
}
