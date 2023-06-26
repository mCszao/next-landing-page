import { GiCloudDownload } from 'react-icons/gi';
interface IArquiveDownloadButtonProps {
    text: string;
    color?: string;
    description: string;
}
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
            className='flex items-center gap-2 rounded-lg border p-1 font-semibold text-sm'
        >
            <GiCloudDownload />
            <span>{text}</span>
        </button>
    );
}
