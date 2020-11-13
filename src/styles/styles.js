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

    @media screen and (max-width: 600px) {
        h1, h2 {
            font-size: 95%;
        }
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

export const NotFound = styled.div`
    margin 8% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    div {
        text-align: center;

        h2 {
            margin-bottom: 8%;
        }
    }

    @media screen and (max-width: 600px) {
        .gatsby-image-wrapper {
            width: 300px !important;
            height: 250px !important;
        }
    }
`;




export const Container = styled.div`
    margin: 5% auto;
`;

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    flex: 1;
    margin: 0 0.5rem;
    align-self: center;

    @media screen and (max-width: 600px) {
        flex: auto;
    }
`;

export const Title = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
`;

export const Paragraph = styled.div`
    font-size: 1em;
    font-weight: normal;
    a { 
        font-weight: bold;
    }
`;