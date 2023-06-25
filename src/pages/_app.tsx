import '@/styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import StyledComponentsRegistry from '@/lib/registry';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <StyledComponentsRegistry>
                <Component {...pageProps} />
            </StyledComponentsRegistry>
        </ChakraProvider>
    );
}
