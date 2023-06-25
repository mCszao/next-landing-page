import Image, { StaticImageData } from 'next/image';
import Thumb from '../../../assets/images/thumbnail.png';
export interface IBoxVideoProps {
    id: number;
    image?: StaticImageData;
    title: string;
}
export default function BoxVideo({ id, title }: IBoxVideoProps) {
    return (
        <article
            key={id}
            style={{ boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.123)' }}
            className=' rounded-lg w-3/4 relative flex flex-col justify-center box-border hover:cursor-pointer transition '
        >
            <Image
                src={Thumb}
                alt='Thumbnail do vídeo'
                className='rounded-t-lg'
            />
            <h3 className='m-4'>{title}</h3>
        </article>
    );
}
