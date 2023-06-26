import { IHeaderListProps } from '@/interface/IHeaderListProps';

export default function HeaderList({ navButtons }: IHeaderListProps) {
    return (
        <section className='flex justify-evenly w-full'>
            <nav className='flex gap-4 flex-wrap justify-center'>
                {navButtons}
            </nav>
            <div className='flex flex-col gap-4 items-center md:flex-row'>
                <strong>Ordernar por</strong>
                <select
                    name='ordenator'
                    id='ordenator'
                    className='rounded-lg px- p-2 border border-textColor1 hover:border-primaryBlue hover:text-primaryBlue font-semibold focus:text-white focus:bg-primaryBlue focus:border-primaryBlue '
                >
                    <option value='dateview'>Data de publicação</option>
                    <option value='dateview'>Mais bem avaliado</option>
                </select>
            </div>
        </section>
    );
}
