import styled from 'styled-components';

export const Navbar = styled.div`
    width: 100%;
    color: ${props => props.theme.primary};
    background-color: ${props => props.theme.secondary};
    header {
        display: flex;
        padding: 30px 2%;
        flex-flow: row wrap;
        font-family: system-ui;
        justify-content: space-between;
        nav {
            text-align: center;
            align-self: center;
            text-transform: uppercase;
            li {
                padding: 0px 20px;
                list-style-type: none;
            }

            ul {
                display: flex;
            }

            a {
            font-size: 500;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.3s ease 0s;
            }

            a:hover {
                color: ${props => props.theme.neutral};
            }
        }
        img {
            cursor: pointer;
        }
    }
`;
