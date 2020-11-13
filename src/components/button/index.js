import React from 'react';
import { Link } from 'gatsby';
import { Btn } from './styles';

export default (props) => { return <Btn> <Link to={props.link}> {props.text} </Link> </Btn> }