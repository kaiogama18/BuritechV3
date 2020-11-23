import React from 'react';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import light from '../src/styles/themes/light';
import { GlobalStyle } from '../src/styles/styles';
import { Footer, Header } from '../src/components/index';

const { ThemeProvider } = require('styled-components');

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <GlobalStyle />
        <Helmet>
            <meta charSet="utf-8" />
            <title>Buritech | Soluções em Machine Learning</title>
        </Helmet>
        <Header />

        {element}

        {/* <Footer /> */}
    </ThemeProvider>
}
