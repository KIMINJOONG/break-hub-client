export interface IProps {
    text: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    placeholder: string;
}