import { useState } from 'react';
import ModalBase from '../ModalBase';
import BoxVideo from './BoxVideo';
import { StyledList } from './StyledGridList';
import { IVideos } from '@/interface/IVideos';

interface IGridListProps {
    currentData: any;
}
export default function ListVideos({ currentData }: IGridListProps) {
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
