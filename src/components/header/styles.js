import styled from 'styled-components';


export const Contact = styled.div`
    display: flex;
    background-color: ${props => props.theme.dark};
    
    div {
        width: 100%;
        color: white;
        display: flex;
        font-size: 11px; 
        margin-top: 1rem;
        align-items: center;
        justify-content: space-between;
    }

    p {
        display: flex;
        justify-content: center;
    }

    .material-icons {
        margin 0 3px;
        font-size: 15px;
        font-family: 'Material Icons';
    }

    b {
        font-size: 12px;
        font-weight: bold;
        margin-right: 5px;
    }

    @media screen and (max-width: 992px) {
        font-size: 65%; 
    }

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
