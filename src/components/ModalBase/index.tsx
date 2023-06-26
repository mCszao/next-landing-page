import { IVideos } from '@/interface/IVideos';
import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
} from '@chakra-ui/react';

interface IModalBaseProps {
    isModalOpen: boolean;
    callback: () => void;
    model: IVideos;
}
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
                    {model.title}
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <p>{model.link}</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={callback}>
                        Fechar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
