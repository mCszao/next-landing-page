export interface IButtonNumberProps {
    pageNumber: string | number;
}
export default function ButtonNumber({ pageNumber }: IButtonNumberProps) {
    return (
        <button className='rounded-lg  p-1 px-3 border border-textColor1 hover:border-primaryBlue hover:text-primaryBlue font-semibold focus:text-white focus:bg-primaryBlue focus:border-primaryBlue'>
            {pageNumber}
        </button>
    );
}