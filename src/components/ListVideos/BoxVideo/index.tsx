import Image, { StaticImageData } from 'next/image';
import Thumb from '../../../assets/images/thumbnail.png';
import { StyledImageContainer } from './StyledImageContainer';
import { FaPlay } from 'react-icons/fa';
import { IBoxVideoProps } from '@/interface/IBoxVideoProps';

export default function BoxVideo({ id, title, onClick }: IBoxVideoProps) {
    return (
        <article
            key={id}
            style={{ boxShadow: '5px 10px 15px rgba(0, 0, 0, 0.123)' }}
            className=' rounded-lg lg:w-72 relative flex flex-col justify-center box-border hover:cursor-pointer transition hover:text-primaryBlue font-semibold'
            onClick={() => onClick()}
        >
            <StyledImageContainer>
                <header>
                    <Image
                        src={Thumb}
                        alt='Thumbnail do vídeo'
                        className='rounded-t-lg w-full'
                    />
                </header>
                <FaPlay color='#0084ff' size={'3em'} className='icon' />
            </StyledImageContainer>
            <h3 className='m-4'>{title}</h3>
        </article>
    );
}
