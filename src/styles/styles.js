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
        text-align: justify;
        font-family: cursive;
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
    padding: 1%;
    align-self: center;

    .cards{
        display: flex;
        text-align: center;
        flex-direction: column;

        h5 {
            height: 3em;
            display: flex;
            font-weight: bold;
            align-items: center;
            justify-content: center;
        }
    }

    .material-icons {
        margin: 3% 0;
        color: #e8b11c;
        font-size: 5em;
        font-family: 'Material Icons';
    }

    @media screen and (max-width: 600px) {
        flex: auto;
    }
`;

export const Title = styled.div`
    margin: 1% 0;
    display: inline;
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(90deg, rgba(254,86,61,1) 35%, rgba(233,175,29,1) 100%); 
    background-size: 100% 4px;
    background-repeat: no-repeat;
    background-position: bottom 0 left -50px;
`;

export const Paragraph = styled.div`
    margin: 1% 0;
    font-size: 1em;
    text-align: initial;
    font-weight: normal;
    a { 
        font-weight: bold;
    }
`;