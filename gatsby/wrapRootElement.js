
import React from 'react'
import light from '../src/styles/themes/light'
import { Header, Footer } from '../src/components/index'
const { ThemeProvider } = require('styled-components');

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <Header />
        {element}
        <Footer />
    </ThemeProvider>
}


