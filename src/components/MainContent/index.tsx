import Image from 'next/image';
import AssetHeader from '../../assets/images/asset-header.png';
import { BaseSection } from './BaseSection';
import Graphic from '../../assets/images/comparativo_img_CTA.png';
import GetDemoContaner from '../GetDemoContainer';
import HeaderGridList from '../HeaderGridList';
import FooterGridList from '../FooterGridList';
import SelectorButton from '../SelectorButton';
import { useFileManager } from '@/hooks/useFileManager';
import ButtonNumber from '../FooterGridList/ButtonNumber';
import ListVideos from '../GridListVideos';

export default function MainContent() {
    const { currentData, setFilter, totalPages, setCurrentPage } =
        useFileManager();

    return (
        <main className='font-jakarta'>
            <BaseSection isBlue={true} isColumn={true} isEvenly={false}>
                <h3 className='pr-3 pl-3  font-bold text-sm border-2 border-primaryBlue rounded-t-xl rounded-br-xl text-primaryBlue hover:bg-primaryBlue hover:text-white transition h-7'>
                    WEBINARS EXCLUSIVOS
                </h3>
                <h2 className='text-textColor1 text-5xl'>Menos Conversinha,</h2>
                <div className='relative'>
                    <h1 className='text-primaryBlue text-7xl  font-semibold static  '>
                        Mais Conversão
                    </h1>
                    <Image
                        src={AssetHeader}
                        alt='Chapéu em uma palavra com parte da logo'
                        className='absolute  opacity-0 sm:top-0 sm:-right-4 sm:opacity-100'
                    />
                </div>

                <hr className=' bg-textColor1 w-2/4' />
                <p className='text-textColor1 text-sm  font-semibold'>
                    Conheça as estratégias que <strong>mudaram o jogo</strong> e
                    como aplicá-las no seu negócio
                </p>
            </BaseSection>
            <BaseSection isBlue={false} isEvenly={false} isColumn={true}>
                <HeaderGridList
                    navButtons={[
                        <SelectorButton
                            text='Agência'
                            type='button'
                            key={1}
                            clickFunction={() => {
                                setFilter('agency');
                            }}
                        />,
                        <SelectorButton
                            text='ChatBot'
                            type='button'
                            key={2}
                            clickFunction={() => {
                                setFilter('chatBot');
                                setCurrentPage(0);
                            }}
                        />,
                        <SelectorButton
                            text='Marketing Digital'
                            type='button'
                            key={3}
                            clickFunction={() => {
                                setFilter('marketing');
                                setCurrentPage(0);
                            }}
                        />,
                        <SelectorButton
                            text='Geração de Leads'
                            type='button'
                            key={4}
                            clickFunction={() => {
                                setFilter('leadGeneration');
                                setCurrentPage(0);
                            }}
                        />,
                        <SelectorButton
                            text='Mídia Paga'
                            type='button'
                            key={5}
                            clickFunction={() => {
                                setFilter('paidMedia');
                                setCurrentPage(0);
                            }}
                        />,
                    ]}
                />
                <hr className=' bg-textColor1 w-3/4' />
                <ListVideos currentData={currentData} />
                <hr className=' bg-textColor1 w-3/4' />
                <FooterGridList
                    pageButtons={Array.from(Array(totalPages), (item, i) => {
                        return (
                            <ButtonNumber
                                pageNumber={i + 1}
                                key={i}
                                callback={() => setCurrentPage(i)}
                            />
                        );
                    })}
                />
            </BaseSection>
            <BaseSection isBlue={true} isColumn={false} isEvenly={true}>
                <Image
                    src={Graphic}
                    alt='Gráfico Comparativo'
                    width={500}
                    height={500}
                />
                <GetDemoContaner />
            </BaseSection>
        </main>
    );
}
