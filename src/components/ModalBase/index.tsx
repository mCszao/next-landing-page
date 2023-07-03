import {
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';
import ArquiveDownloadButton from '../ArquiveDownloadButton';
import TitleWithBottomHr from '../TitleWithBottomHr';
import { IModalBaseProps } from '@/interface/IModalBaseProps';

export default function ModalBase({
    isModalOpen,
    callback,
    model,
}: IModalBaseProps) {
    return (
        <Modal isOpen={isModalOpen} onClose={callback}>
            <ModalOverlay />

            <ModalContent>
                <hr className='w-full h-1 bg-textColor2 rounded-t-lg relative  border-none' />
                <ModalHeader>
                    <span className='text-primaryBlue mr-1'>Webinar:</span>
                    {model?.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody padding={'0'}>
                    <iframe
                        className='relative w-full h-64'
                        src={model?.link}
                        title='YouTube video player'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                    ></iframe>
                </ModalBody>

                <ModalFooter
                    display={'flex'}
                    flexDir={'column'}
                    alignItems={'start'}
                    gap={'.5rem'}
                >
                    <article className='flex flex-col gap-2 '>
                        <TitleWithBottomHr text='Descrição' />
                        <p className='font-medium text-sm'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Voluptates dolores suscipit expedita
                            aspernatur nesciunt alias amet doloribus sed dolore
                            a dignissimos quaerat quod, iure blanditiis dolor
                            molestiae pariatur ipsam fugiat?
                        </p>
                    </article>
                    <article className='flex flex-col gap-2  w-full'>
                        <TitleWithBottomHr text='Downloads' />
                        <div
                            role='dowloads'
                            className='flex flex-col items-center sm:flex-row gap-2 '
                        >
                            <ArquiveDownloadButton
                                text='Spreadsheet.xls'
                                description='Botão de download de arquivo em formato xls'
                                color='#9ceddd'
                            />

                            <ArquiveDownloadButton
                                text='Document.doc'
                                description='Botão de download de arquivo em formato doc'
                                color='#a1d9ff'
                            />
                            <ArquiveDownloadButton
                                text='Presentation.ppt'
                                description='Botão de download de arquivo em formato ppt'
                                color='#fff1a0'
                            />
                        </div>
                    </article>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
