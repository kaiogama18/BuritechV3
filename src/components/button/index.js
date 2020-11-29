import React from 'react';
import { Link } from 'gatsby';
import { Btn } from './styles';

export default (props) => { return <Link to={props.link}><Btn> {props.text} </Btn></Link> }