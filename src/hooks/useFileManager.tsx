import { useState } from 'react';
import Data from '../../config.json';
import { IVideos } from '@/interface/IVideos';

export const useFileManager = () => {
    const [category, setCategory] = useState('agency');

    const dataJSON = Data.videos;
    const filteredList = filteredData(dataJSON, category!);

    const setFilter = (category: string) => {
        setCategory(category);
    };
    return {
        currentData: filteredList,
        currentCategory: category,
        setFilter
    };
};

function filteredData(list: any, category: string) {
    const filteredList = list.filter(
        (item: IVideos) => item.category === category
    );
    return filteredList;
}
