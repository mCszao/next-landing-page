import {
    Box,
    Container,
    Stack,
    SimpleGrid,
    Text,
    Link,
    useColorModeValue,
} from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import ListHeader from './ListHeader';

export default function Footer() {
    return (
        <Box
            color={useColorModeValue('gray.700', 'gray.200')}
            className='font-semibold'
        >
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    columns={{ base: 1, sm: 2, md: 4 }}
                    spacing={8}
                    color={'gray'}
                >
                    <Stack align={'flex-start'}>
                        <ListHeader>Links Principais</ListHeader>
                        <Link href={'#'}>Home</Link>
                        <Link href={'#'}>Ferramenta</Link>
                        <Link href={'#'}>Preços</Link>
                        <Link href={'#'}>Contato</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Cases</ListHeader>
                        <Link href={'#'}>Geração de Leads B2B</Link>
                        <Link href={'#'}>Geração de Leads em Software</Link>
                        <Link href={'#'}>Geração de Leads em Imobiliária</Link>
                        <Link href={'#'}>Cases de Sucesso</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Materiais</ListHeader>
                        <Link href={'#'}>Blog</Link>
                        <Link href={'#'}>Parceira com Agências</Link>
                        <Link href={'#'}>Guia Definitivo do Marketing</Link>
                        <Link href={'#'}>Materiais Gratuitos</Link>
                    </Stack>

                    <Stack align={'flex-start'}>
                        <ListHeader>Siga a Leadster</ListHeader>
                        <Stack direction={'row'} gap={3}>
                            <a className='bg-gray-200 p-3 rounded-full cursor-pointer hover:-translate-y-3 transition'>
                                <FaFacebook size={'1em'} color='#1c3c50' />
                            </a>

                            <a className='bg-gray-200 p-3 rounded-full cursor-pointer hover:-translate-y-3 transition'>
                                <FaLinkedin size={'1em'} color='#1c3c50' />
                            </a>
                            <a className='bg-gray-200 p-3 rounded-full cursor-pointer hover:-translate-y-3 transition'>
                                <FaInstagram size={'1em'} color='#1c3c50' />
                            </a>
                        </Stack>
                        <Stack direction={'column'} gap={3}>
                            <p>
                                Email:
                                <span className='text-primaryBlue ml-2 font-normal'>
                                    contato@leadster.com.br
                                </span>
                            </p>
                            <p>
                                Telefone:
                                <span className='text-primaryBlue ml-2 font-normal'>
                                    (42) 98828-9851
                                </span>
                            </p>
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>

            <Box
                borderTopWidth={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
                <Container
                    as={Stack}
                    maxW={'5xl'}
                    py={4}
                    direction={{ base: 'column', md: 'row' }}
                    justify={{ md: 'space-between' }}
                    margin={'1rem'}
                    color={'gray'}
                    alignItems={'center'}
                >
                    <Text>
                        Copyright &copy; 2015-2022 Todos os direitos reservados
                        <Link
                            className='font-jakarta text-primaryBlue m-1'
                            href='https://leadster.com.br/'
                        >
                            Leadster
                        </Link>
                    </Text>
                    <Text>
                        Rua José Loureiro, 464 - Centro - Curitiba PR - CEP:
                        80010-000 | Termos de uso
                    </Text>
                </Container>
            </Box>
        </Box>
    );
}
