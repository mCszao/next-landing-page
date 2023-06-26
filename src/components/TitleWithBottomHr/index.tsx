export interface ITitleWithBottomHrProps {
    text: string;
}
export default function TitleWithBottomHr({ text }: ITitleWithBottomHrProps) {
    return (
        <header>
            <h3 className='font-semibold text-sm'>{text}</h3>
            <hr className=' bg-textColor1 w-full' />
        </header>
    );
}
