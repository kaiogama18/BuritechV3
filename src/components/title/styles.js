import styled from 'styled-components';

export const Title = styled.h4`
  padding: 1%;
  display: inline;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(254,86,61,1) 35%, rgba(233,175,29,1) 100%);
  background-size: 100% 4px;
  background-repeat: no-repeat;
  background-position: bottom 0 left -50px; 
  b { visibility:hidden }

  @media screen and (max-width: 600px) {
    margin-left: 3%;
  }
`;

export const TNormal = styled.h5`
  display: inline;
  font-weight: bold;
`;


export const ListLink = styled.div`
  text-align: center;
  padding: ${props => props.padding ? '1em 0' : '0'};

  a {
    color: white;
    text-decoration: none;
    font-family: system-ui;
    text-transform: uppercase;
    transition: all 0.3s ease 0s;
    &:hover {
      color: ${props => props.theme.neutral};
    }
  }

  @media screen and (max-width: 600px) {
    display: ${props => (props.show === 'desktop' ? 'none' : null)};
  }

`;
