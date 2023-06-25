import { ISocialButtonProps } from '@/interface/ISocialButtonProps';
import { Icons } from 'next/dist/lib/metadata/types/metadata-types';

export default function SocialButton({ link }: ISocialButtonProps) {
    return <a href={link}></a>;
}
