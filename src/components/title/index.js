import React from 'react';
import { Link } from 'gatsby';
import { Title, TNormal, ListLink } from './styles'

export default function (props) {
  return (
    !props.link ? (
      props.normal ? <TNormal> {props.children} </TNormal> :
        <Title><b>.</b>{props.children} </Title>
    ) :
      (
        <ListLink padding={props.vertical} show={props.only}>
          <Link key={props.children} to={props.url} activeStyle={{ color: "#e8b11c" }} >{props.children}</Link>
        </ListLink>
      )
  )
}


