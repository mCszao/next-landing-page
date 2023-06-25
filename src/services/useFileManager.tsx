import Data from '../config.json';

export default function FileManager() {
    const ReadFile = () => {
        console.log(Data);
    };
    return { ReadFile };
}
