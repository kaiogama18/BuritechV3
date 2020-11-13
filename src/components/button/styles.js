import styled from 'styled-components';

export const Btn = styled.div`
    margin 1em 0;
    cursor: pointer;
    a {
        color: white;
        font-size: 0.8rem;
        font-weight: 500;
        text-align: center;
        padding: 0.2em 1em;
        border-radius: 20px;
        text-decoration: none;
        font-family: system-ui;
        text-transform: uppercase;
        border: 5px solid #e8b11c;
        background-color: #e8b11c;
        transition: all 0.3s ease 0s;
        transition: all 0.3s cubic-bezier(.25,.8,.25,1);
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        &:hover {
            background-color: ${props => props.theme.fontColor};
            border: 5px solid ${props => props.theme.fontColor};
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        }
    }
`;

