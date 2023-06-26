import { useState } from 'react';
import Data from '../../config.json';
import { IVideos } from '@/interface/IVideos';

export const useFileManager = () => {
    const [category, setCategory] = useState('agency');
    const [currentPage, setCurrentPage] = useState(0);
    const dataJSON = Data.videos;
    const filteredList = filteredData(dataJSON, category!);
    const pages = Math.ceil(filteredList.length / 9);
    const starIndex = currentPage * 9;
    const endIndex = starIndex + 9;

    const setFilter = (category: string) => {
        setCategory(category);
    };
    return {
        currentData: filteredList.slice(starIndex, endIndex),
        currentCategory: category,
        setFilter,
        currentPage,
        setCurrentPage,
        totalPages: pages,
    };
};

function filteredData(list: any, category: string) {
    const filteredList = list.filter(
        (item: IVideos) => item.category === category
    );
    return filteredList;
}
