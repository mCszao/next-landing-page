import { Html, Head, Main, NextScript } from 'next/document';
import StyledComponentsRegistry from '../lib/registry';
import { StyledHeader } from '@/components/Header/StyledHeader';
import { Image } from '@chakra-ui/next-js';
import Logo from '../assets/images/logo.png';
import Header from '@/components/Header';

export default function Document() {
    return (
        <Html lang='pt-br'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
