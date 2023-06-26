import { StaticImageData } from 'next/image';
export interface IBoxVideoProps {
    id?: number;
    image?: StaticImageData;
    title: string;
    onClick: () => void;
}
