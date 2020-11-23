import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Title, TNormal, ListLink } from './styles'

export default function (props) {
  return (
    props.link ? (
      <ListLink padding={props.vertical}>
        <Link to={props.url} activeStyle={{ color: "red" }} >{props.children}</Link>
      </ListLink>
    ) : (
        props.normal ? <TNormal> {props.children} </TNormal> :
          <Title><b>.</b>{props.children} </Title>
      )
  )
}


