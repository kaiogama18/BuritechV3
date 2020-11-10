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


export const Container = styled.div`
    color: ${props => props.theme.primary}
    padding: 0 1em;
`;


export const Button  = styled.div`
    a {
        color: white;
        padding: 1% 5%;
        cursor: pointer;
        font-weight: 500;
        text-align: center;
        border-radius: 20px;
        text-decoration: none;
        font-family: system-ui;
        background-color:#ffc81a;
        text-transform: uppercase;
        border: 5px solid #ffc81a;
        transition: all 0.3s ease 0s;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        &:hover {
            background-color: ${props => props.theme.fontColor};
            border: 5px solid ${props => props.theme.fontColor};
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
    }
`;


