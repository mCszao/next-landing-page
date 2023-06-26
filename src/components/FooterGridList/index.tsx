import ButtonNumber from './ButtonNumber';
export interface IFooterGridList {
    pageButtons: JSX.Element | JSX.Element[];
}
export default function FooterGridList({ pageButtons }: IFooterGridList) {
    return (
        <nav className='flex font-semibold gap-4 items-center trasition'>
            <span>Página</span>
            {pageButtons}
        </nav>
    );
}
