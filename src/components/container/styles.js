import styled from 'styled-components';

export const Container = styled.div`
    padding: ${props => props.padding ? '2em 0' : '0'};
    background-color: ${props => props.backgroundColor};

    .card {
        flex: 1;
        border: 0;
        padding: 1%;
        text-align: center;
        background-color: #fff0;
        
        h5 {
            height: 3em;
            display: flex;
            font-weight: bold;
            align-items: center;
            justify-content: center;
        }

        .material-icons {
            margin: 3% 0;
            color: #e8b11c;
            font-size: 5em;
            font-family: 'Material Icons';
        }
    
        @media screen and (max-width: 600px) {
            flex: auto;
        }
    }
`;


export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 960px; 
    margin-right: auto; 
    margin-left:  auto; 
    padding-right: 10px; 
    padding-left:  10px; 
`;