import Image from 'next/image';
import AssetHeader from '../../assets/images/asset-header.png';
import { BaseSection } from './BaseSection';
import Graphic from '../../assets/images/comparativo_img_CTA.png';
import GetDemoContaner from '../GetDemoContainer';
export default function MainContent() {
    return (
        <main className='font-jakarta'>
            <BaseSection isBlue={true} isColumn={true} isEvenly={false}>
                <h3 className='pr-3 pl-3  font-bold text-sm border-2 border-primaryBlue rounded-t-xl rounded-br-xl text-primaryBlue hover:bg-primaryBlue hover:text-white transition h-7'>
                    WEBINARS EXCLUSIVOS
                </h3>
                <h2 className='text-textColor1 text-5xl'>
                    Menos Conversinha,
                </h2>
                <div className='relative'>
                    <h1 className='text-primaryBlue text-7xl  font-semibold static  '>
                        Mais Conversão
                    </h1>
                    <Image
                        src={AssetHeader}
                        alt='Chapéu em uma palavra com parte da logo'
                        className='absolute top-0 -right-4'
                    />
                </div>

                <hr className=' bg-textColor1 w-2/4' />
                <p className='text-textColor1 text-sm  font-semibold'>
                    Conheça as estratégias que <strong>mudaram o jogo</strong> e
                    como aplicá-las no seu negócio
                </p>
            </BaseSection>
            <BaseSection isBlue={false} isEvenly={false}>
                <div className='grid grid-cols-4'>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                    <p>1</p>
                </div>
                <p>1</p>
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
