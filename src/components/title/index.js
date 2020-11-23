import React from 'react';
import styled from 'styled-components';


const Title = styled.h4`
  display: inline;
  font-weight: bold;
  background: linear-gradient(90deg, rgba(254,86,61,1) 35%, rgba(233,175,29,1) 100%);
  background-size: 100% 4px;
  background-repeat: no-repeat;
  background-position: bottom 0 left -50px; 
  b { visibility:hidden }
`;

const TNormal = styled.h5`
  display: inline;
  font-weight: bold;
`;

export default function (props) {
    return (
        props.normal ? <TNormal> {props.children} </TNormal> :
        <Title><b>.</b>{props.children} </Title>
    )
}

