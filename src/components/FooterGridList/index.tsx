import ButtonNumber from './ButtonNumber';

export default function FooterGridList() {
    return (
        <nav className='flex font-semibold gap-4 items-center trasition'>
            <span>Página</span>
            <ButtonNumber pageNumber={1} />
            <ButtonNumber pageNumber={2} />
            <ButtonNumber pageNumber={3} />
            <ButtonNumber pageNumber={4} />
        </nav>
    );
}
