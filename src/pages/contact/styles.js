import styled from 'styled-components';


export const Form = styled.div`
    form {
        margin: 0 0 3% 0;
        display: flex;
        text-align: initial;
        flex-direction: column;

        a {
            margin-top: 3%;
            text-align: center;
        }
    }

    label {
        margin: 3% 0 1% 0;
    }

    input, textarea {
        border: 0;
        border-radius: 10px;
        background-color: #dce7f3;
    }
`;