import { BoxImageTextProps } from '@/interface/IBoxImageTextProps';

import Image from 'next/image';

export default function BoxImageText({
    imageComponent,
    alt,
}: BoxImageTextProps) {
    return (
        <div className='flex gap-1 items-center'>
            <Image src={imageComponent} alt={alt} />
            <p className='text-sm font-semibold '>{alt}</p>
        </div>
    );
}
