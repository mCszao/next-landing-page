import { useState } from 'react';
import ModalBase from '../ModalBase';
import BoxVideo from './BoxVideo';
import { StyledGridList } from './StyledGridList';
import { IVideos } from '@/interface/IVideos';

interface IGridListProps {
    currentData: any;
}
export default function GridList({ currentData }: IGridListProps) {
    const [isOpen, setIsOpen] = useState(true);
    const [currentVideo, setCurrentVideo] = useState<IVideos>({
        category: 'teste',
        date: '202323',
        link: 'aslakjslkas',
        title: 'testefeito',
    });
    return (
        <StyledGridList>
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
        </StyledGridList>
    );
}
