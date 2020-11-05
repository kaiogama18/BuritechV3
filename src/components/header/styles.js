import styled from 'styled-components';


export const Contact = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme.white};
    background-color: ${props => props.theme.dark};
    div {
        display: flex;
        p {
            margin: 10px;
            padding: 0 20px;
        }
    }
`;


export const Navbar = styled.div`
    width: 100%;
    nav {
        display: flex;
        padding: 1% 2%;
        flex-flow: row wrap;
        justify-content: space-between;
        background-color: ${props => props.theme.secondary};
        img {
            cursor: pointer;
        }
        a {
        font-weight: 500;
        text-decoration: none;
        font-family: system-ui;
        text-transform: uppercase;
        transition: all 0.3s ease 0s;
        color: ${props => props.theme.white};
        }
        a:hover {
            color: ${props => props.theme.neutral};
        }
        
    }    
`;
