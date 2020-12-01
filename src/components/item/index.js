import React from 'react';
import styled from 'styled-components';

const Flex = styled.div`
  flex: 1;
  padding: 1%;
  align-self: center;
  text-align: ${props => (props.center ? 'center' : null)};
  display: ${props => (props.show === 'mobile' ? 'none' : null)};
  text-align: ${props => ( props.align ? props.align : null)};

  @media screen and (max-width: 600px) {
    flex: auto;
    margin-top: 5%;
    text-align: justify;
    display: ${props => (props.show === 'mobile' ? 'flex' : null)};
    display: ${props => (props.show === 'desktop' ? 'none' : null)};
  }
`;

const Item = styled.div`
  flex-wrap: wrap;
  text-align: ${props => (props.center ? 'center' : null)};
  display: ${props => (props.show === 'mobile' ? 'none' : 'flex')};


  @media screen and (max-width: 600px) {
    display: ${props => (props.show === 'mobile' ? 'flex' : null)};
    display: ${props => (props.show === 'desktop' ? 'none' : null)};
  }
`;


export default function (props) {
  return (props.flex ? (<Flex show={props.only} center={props.center} align={props.align}> {props.children} </Flex>) : (<Item show={props.only} center={props.center} align={props.align}> {props.children} </Item>))
}
