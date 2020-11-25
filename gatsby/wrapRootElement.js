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
            {/* <meta http-equiv="Content-Language" content="pt-br"/> */}
            <meta name="description" content="A Buritech é uma empresa com foco em Machine Learning, aplicativos mobile e web sites, situada em Manaus-Am." />
            <meta name="keywords" content="machine learning, desenvolvimento de aplicativo, desenvolvimento mobile, web design, desenvolvimento iphone, desenvolvimento android, desenvolvimento de site, tecnologia." />
            <meta name="author" content="Buritech" />
            {/* <link rel="canonical" href="http://buritech.com.br/" /> */}
            <link rel="canonical" href="http://buritech.netlify.app/" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Buritech | Soluções em Machine Learning</title>
        </Helmet>
        <Header />

        {element}

        <Footer />
    </ThemeProvider>
}
