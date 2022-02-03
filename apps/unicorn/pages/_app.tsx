import type { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppLayoutProps } from 'next/app';
import React, { ReactNode } from 'react';
import { ChakraProvider } from '@chakra-ui/react'

const MyApp: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
    Component,
    pageProps,
}: AppLayoutProps) => {
    const getLayout = Component.getLayout || ((page: ReactNode) => page);
    return getLayout(
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp