import { IVideos } from './IVideos';

export interface IModalBaseProps {
    isModalOpen: boolean;
    callback: () => void;
    model?: IVideos;
}
