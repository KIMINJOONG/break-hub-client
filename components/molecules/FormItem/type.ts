export interface IProps {
    id: string;
    text: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string;
}