import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

// @media (min-width:320px) { /* smartphones, portrait iPhone, portrait 480x320 phones (Android) */ }
// @media (min-width:480px) { /* smartphones, Android phones, landscape iPhone */ }
// @media (min-width:600px) { /* portrait tablets, portrait iPad, e-readers (Nook/Kindle), landscape 800x480 phones (Android) */ }
// @media (min-width:801px) { /* tablet, landscape iPad, lo-res laptops ands desktops */ }
// @media (min-width:1025px) { /* big landscape tablets, laptops, and desktops */ }
// @media (min-width:1281px) { /* hi-res laptops and desktops */ }

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
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

    .invisible-tablet-mobile {
        display: inherit;
    }

    @media screen and (max-width: 992px) {
        .invisible-tablet-mobile {
            display: none;
        }
    }
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
    background-color: #edf3f9;
    padding: 2em 0;
`;

export const Section = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    flex: 1;
    align-self: center;
    .center{
        padding: 1%;
        margin-top: 1em;
        text-align: center;
        .title {
            height: 3em;
            display: flex;
            font-size: 1.2em;
            font-weight: bold;
            justify-content: center;
        }
    }

    .material-icons {
        font-size: 5em;
        color: #e8b11c;
        font-family: 'Material Icons';
    }

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