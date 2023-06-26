export interface ISelectorButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    clickFunction: () => void;
}