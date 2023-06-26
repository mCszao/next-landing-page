import { IButtonNumberProps } from '@/interface/IButtonNumberProps';

export default function ButtonNumber({
    pageNumber,
    callback,
    description,
}: IButtonNumberProps) {
    return (
        <button
            aria-label={description}
            className='rounded-lg  p-1 px-3 border border-textColor1 hover:border-primaryBlue hover:text-primaryBlue font-semibold focus:text-white focus:bg-primaryBlue focus:border-primaryBlue'
            onClick={() => callback()}
        >
            {pageNumber}
        </button>
    );
}
