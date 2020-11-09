import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-size:  80%;
        font-family: Arial, sans-serif;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.background};
    }

    * {
    box-sizing: border-box;
    }

    footer {
        background-color: ${props => props.theme.secondary};
    }

`;

export const Wrapper = styled.div`
    flex-wrap: wrap;

    margin-right: auto; /* 1 */
    margin-left:  auto; /* 1 */
  
    max-width: 960px; /* 2 */

    padding-right: 10px; /* 3 */
    padding-left:  10px; /* 3 */
`;


export const Container = styled.div`
    color: ${props => props.theme.primary}
    padding: 0 1em;
`;


