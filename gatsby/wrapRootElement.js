import React from 'react'
import light from '../src/styles/themes/light'
import { GlobalStyle } from '../src/styles/styles';
import { Footer, Header } from '../src/components/index';
import { Wrapper } from '../src/styles/styles';
import {Helmet} from 'react-helmet';


const { ThemeProvider } = require('styled-components');

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <GlobalStyle />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Buritech | Soluções em Machine Learning</title>
        </Helmet>
        <Header />
        <Wrapper>
            {element}
        </Wrapper>
        <Footer />
    </ThemeProvider>
}
