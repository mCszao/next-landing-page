import { IFooterList } from '@/interface/IFooterList';


export default function FooterList({ pageButtons }: IFooterList) {
    return (
        <nav className='flex font-semibold gap-4 items-center trasition'>
            <span>Página</span>
            {pageButtons}
        </nav>
    );
}
