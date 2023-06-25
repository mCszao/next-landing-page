import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export interface ISocialButtonProps {
    children: ReactNode | IconType;
    link: string;
}
