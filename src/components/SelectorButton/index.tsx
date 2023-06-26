export interface ISelectorButtonProps {
    text: string;
    type: 'button' | 'submit' | 'reset' | undefined;
    clickFunction: () => void;
}
export default function SelectorButton({
    text,
    type,
    clickFunction,
}: ISelectorButtonProps) {
    return (
        <button
            className='rounded-full px-5 p-2 border border-textColor1 hover:border-primaryBlue hover:text-primaryBlue font-semibold focus:text-white focus:bg-primaryBlue focus:border-primaryBlue'
            type={type}
            onClick={() => clickFunction()}
        >
            {text}
        </button>
    );
}
