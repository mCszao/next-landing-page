import { IArquiveDownloadButtonProps } from '@/interface/IArquiveDownloadButtonProps';
import { GiCloudDownload } from 'react-icons/gi';

export default function ArquiveDownloadButton({
    text,
    color,
    description,
}: IArquiveDownloadButtonProps) {
    return (
        <button
            aria-label={description}
            type='button'
            style={{ backgroundColor: color ? color : '#007DF9' }}
            className=' w-2/4 justify-center flex items-center gap-2 rounded-lg border p-1 font-semibold text-sm sm:hover:scale-105 transition-all focus:w-full'
        >
            <GiCloudDownload />
            <span>{text}</span>
        </button>
    );
}
