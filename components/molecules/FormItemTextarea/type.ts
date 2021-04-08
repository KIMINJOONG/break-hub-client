export interface IProps {
  id: string;
  text: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder: string;
  height: string;
}
