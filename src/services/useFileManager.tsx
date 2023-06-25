import { useState } from 'react';
import Data from '../config.json';
import { IVideos } from '@/interface/IVideos';

export default function FileManager() {
    const [data, setData] = useState<IVideos>();
    const readFileByLabel = (label: string) => {
        return Object.keys(label);
    };
    return { readFileByLabel };
}
