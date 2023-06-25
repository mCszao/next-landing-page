import { ReactNode } from 'react';

import { Text } from '@chakra-ui/react';
export default function ListHeader({ children }: { children: ReactNode }) {
    return (
        <Text
            className='text-textColor1 font-jakart font-semibold'
            fontWeight={'500'}
            fontSize={'lg'}
            mb={2}
        >
            {children}
        </Text>
    );
}
