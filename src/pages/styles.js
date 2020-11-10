import styled from 'styled-components';

export const NotFound = styled.div`
    margin 8% 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 600px) {
        .gatsby-image-wrapper {
            width: 300px !important;
            height: 250px !important;
        }
    }
`;


export const Container = styled.div`
    margin: 5% 0;
    text-align: center;

    h2 {
        margin-bottom: 8%;
    }

    a {
        color: white;
        padding: 1% 5%;
        cursor: pointer;
        font-weight: 500;
        text-align: center;
        border-radius: 20px;
        text-decoration: none;
        font-family: system-ui;
        background-color:#ffc81a;
        text-transform: uppercase;
        border: 5px solid #ffc81a;
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

