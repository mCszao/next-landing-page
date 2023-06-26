interface IHeaderGridListProps {
    navButtons?: JSX.Element | JSX.Element[];
}
export default function HeaderGridList({ navButtons }: IHeaderGridListProps) {
    return (
        <div className='flex justify-evenly w-full'>
            <nav className='flex gap-4 flex-wrap'>{navButtons}</nav>
            <div className='flex gap-2 items-center'>
                <strong>Ordernar por</strong>
                <select
                    name='ordenator'
                    id='ordenator'
                    className='rounded-lg px- p-2 border border-textColor1 hover:border-primaryBlue hover:text-primaryBlue font-semibold focus:text-white focus:bg-primaryBlue focus:border-primaryBlue'
                >
                    <option value='dateview'>Por data de publicação</option>
                    <option value='dateview'>Mais bem avaliado</option>
                </select>
            </div>
        </div>
    );
}
