import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        color: ${props => props.theme.fontColor};
        background-color: ${props => props.theme.background};
    }

    * {
    box-sizing: border-box;
    }

    hr {
        border-top: 1px solid #ffffff;
    }

    nav {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;   
    }

    .carousel-control-prev-icon,
    .carousel-control-next-icon {
        height: 100px;
        width: 100px;
        outline: black;
        background-size: 100%, 100%;
        border-radius: 50%;
        // border: 1px solid black;
        background-image: none;
    }

    .carousel-control-next-icon:after{
        content: '>';
        font-size: 55px;
        color: #e8b11c;
    }

    .carousel-control-prev-icon:after {
        content: '<';
        font-size: 55px;
        color: #e8b11c;
    }
    
    // do not show content on mobile
    .hidden {
        display: flex;
        @media screen and (max-width: 600px) {
            display: none;
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

