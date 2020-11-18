import styled from 'styled-components';

export const Footer = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    display: flex;
    // position: fixed;
    flex-wrap: wrap;
    text-align: center;
    background-color: ${props => props.theme.secondary};

    p{
        font-weight: 500;
        text-decoration: none;
        font-family: system-ui;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
    }

    // @media screen and (max-width: 992px) {
    //     position: initial;
    // }

    // @media screen and (max-width: 600px) {
    //     position: initial;
    // }
`;
