import styled from 'styled-components';

export const Footer = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    color: white;
    display: flex;
    padding-top: 1%;
    flex-wrap: wrap;
    text-align: center;
    background-color: ${props => props.theme.secondary};

    p{
        display: flex;
        align-items: center;
        margin-left: 1%;
    }

    .center {
        margin: 11% 0px;
    }

    .cards{
        display: contents;
        text-align: center;
    }

    .link{
        color: white;
        font-size: 1.1em;
        text-align: center;
    }

    .material-icons {
        color: white;
        font-size: 1.5em;
        margin-right: 2%;
    }

    a {
        color: white;
        font-weight: bold;
        text-decoration: none;
        font-family: system-ui;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
    }
    a:hover {
        color: ${props => props.theme.neutral};
    }

    b {
        font-weight: bold;
        margin-right: 5px;
    }




    @media screen and (max-width: 992px) {
        .link{
            display: none;
        }
    }

    @media screen and (max-width: 600px) {}

`;
