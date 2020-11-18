import styled from 'styled-components';


export const Contact = styled.div`
    display: flex;
    background-color: ${props => props.theme.dark};
    
    div {
        width: 100%;
        color: white;
        display: flex;
        font-size: 12px;
        margin-top: 1rem;
        justify-content: space-between;
    }

    p {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .material-icons {
        margin 0 3px;
        font-size: 18px;
        font-family: 'Material Icons';
    }

    b {
        font-weight: bold;
        margin-right: 5px;
    }

    @media screen and (max-width: 992px) {}

    @media screen and (max-width: 600px) {
        display: none;
    }
`;


export const Navbar = styled.div`
    width: 100%;
    background-color: ${props => props.theme.secondary};
    
    nav {
        display: flex;
        padding: 0 2%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;

        img {
            cursor: pointer;
        }

        a {
            color: white;
            font-weight: 500;
            text-decoration: none;
            font-family: system-ui;
            text-transform: uppercase;
            transition: all 0.3s ease 0s;
        }
        a:hover {
            color: ${props => props.theme.neutral};
        }

        @media screen and (max-width: 600px) {
            .link{
                display: none;
            }
        }
        
    }    
`;
