import styled from 'styled-components';

export const Container = styled.div`
    padding: ${props => props.padding ? '2em 0' : '0'};
    background-color: ${props => props.backgroundColor};
    color: ${props => props.color};

    @media screen and (max-width: 600px) {
        padding: 1em 0;
        display: ${props => (props.show === 'desktop' ? 'none' : null)};
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
    justify-content: space-between;
`;