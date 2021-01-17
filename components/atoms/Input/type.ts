export interface IProps {
    id: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string;
}