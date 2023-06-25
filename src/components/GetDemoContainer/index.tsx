import Image from 'next/image';
import fs from 'fs';
import Selo from '../../assets/images/selo_RD.png';
import NotCard from '../../assets/images/no-card-dark.webp';
import BoxImageText from './BoxImageText';
import Stars from '../../assets/images/rating.webp';
import FileManager from '@/services/useFileManager';

export default function GetDemoContaner() {
    const { readFileByLabel } = FileManager();
    return (
        <div className='flex flex-col gap-1'>
            <h3 className='text-textColor1 text-3xl text-left'>
                Pronto para triplicar sua
            </h3>
            <strong className='text-textColor1 text-3xl text-left'>
                Geração de Leads?
            </strong>
            <p className='text-textColor1'>
                Criação e ativação em <strong>4 minutos.</strong>
            </p>
            <hr />
            <div className='m-4 flex gap-2 items-center '>
                <button
                    type='button'
                    onClick={() => console.log(readFileByLabel('agency'))
                    }
                    className='font-jakarta text-sm p-2 bg-primaryBlue hover:bg-blue-700 text-white font-bold px-8 rounded-full h-12'
                >
                    VER DEMONSTAÇÃO
                </button>
                <Image src={Selo} alt='Selo' />
            </div>
            <div className='flex gap-2 items-center '>
                <BoxImageText
                    imageComponent={NotCard}
                    alt='Não é necessário Cartão de Crédito |'
                />
                <BoxImageText
                    imageComponent={Stars}
                    alt='4.9/5 média de satisfação'
                />
            </div>
        </div>
    );
}
