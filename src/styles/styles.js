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



export const Paragraph = styled.div`
    margin: 1% 0;
    font-size: 1em;
    font-weight: normal;
    text-align: ${props => props.align}
    a { 
        font-weight: bold;
    }

    @media screen and (max-width: 600px) {
        margin: 0 3%;
        text-align: justify;
    }
`;

    // footer {
    //     background-color: ${props => props.theme.secondary};
    // }


    // export const Containers = styled.div`
//     background-color: #edf3f9;
//     padding: 2em 0;
// `;

// export const Section = styled.div`
//     display: flex;
//     flex-wrap: wrap;

//     .onlyMobile {
//         display: none;
//     }

//     .onlyDesktop {
//         display: flex;
//         flex-wrap: wrap;
//     }

//     @media screen and (max-width: 600px) {
//         .onlyMobile {
//             display: inherit;
//         }

//         .onlyDesktop {
//             display: none;
//         }
//     }
// `;

// export const Item = styled.div`
//     flex: 1;
//     padding: 1%;
//     align-self: center;

//     .cards{
//         display: flex;
//         text-align: center;
//         flex-direction: column;

//         h5 {
//             height: 3em;
//             display: flex;
//             font-weight: bold;
//             align-items: center;
//             justify-content: center;
//         }
//     }

//     .material-icons {
//         margin: 3% 0;
//         color: #e8b11c;
//         font-size: 5em;
//         font-family: 'Material Icons';
//     }

//     @media screen and (max-width: 600px) {
//         flex: auto;
//     }

//     hr {
//         border-top: 1px solid white;
//     }
// `;

// export const Title = styled.div`
//     margin: 1% 0;
//     display: inline;
//     font-size: 1.5rem;
//     font-weight: bold;
//     background: linear-gradient(90deg, rgba(254,86,61,1) 35%, rgba(233,175,29,1) 100%); 
//     background-size: 100% 4px;
//     background-repeat: no-repeat;
//     background-position: bottom 0 left -50px;

//     b {
//         color: #00000000;
//     }
// `;