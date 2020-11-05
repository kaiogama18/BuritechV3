import React from 'react'
import light from '../src/styles/themes/light'
import { createGlobalStyle } from 'styled-components'
import { Footer, Header } from '../src/components/index';

const { ThemeProvider } = require('styled-components');
const GlobalStyle = createGlobalStyle`
  body {
      margin: 0;
  }
`

export function wrapRootElement({ element }) {
    return <ThemeProvider theme={light}  >
        <GlobalStyle />
        <Header />
        {element}
        <Footer />
    </ThemeProvider>
}
