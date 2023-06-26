import { useState } from 'react';
import ModalBase from '../ModalBase';
import BoxVideo from './BoxVideo';
import { StyledList } from './StyledList';
import { IVideos } from '@/interface/IVideos';
import { IListProps } from '@/interface/IListProps';

export default function ListVideos({ currentData }: IListProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentVideo, setCurrentVideo] = useState<IVideos | undefined>(
        undefined
    );
    return (
        <StyledList>
            {currentData.map((item: any) => (
                <BoxVideo
                    id={item.id}
                    key={item.id}
                    title={item.title}
                    onClick={() => {
                        setCurrentVideo(item);
                        setIsOpen(!isOpen);
                    }}
                />
            ))}
            <ModalBase
                isModalOpen={isOpen}
                callback={() => {
                    setIsOpen(!isOpen);
                }}
                model={currentVideo}
            />
        </StyledList>
    );
}
