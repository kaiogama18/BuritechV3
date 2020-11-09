import React from 'react'
import light from '../src/styles/themes/light'
import { GlobalStyle } from '../src/styles/styles';
import { Footer, Header } from '../src/components/index';

const { ThemeProvider } = require('styled-components');

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <GlobalStyle />
        <Header />
        {element}
        <Footer />
    </ThemeProvider>
}
