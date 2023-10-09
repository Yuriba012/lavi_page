import React from "react";
import { Container, Logo } from "./style";
import lavi_logo from '../../assets/lavi_logo.png'

export function Header(props) {
  return (
    <Container>
        <Logo>
            <img src={lavi_logo} width='150px'/>
            <h2>LAVI</h2> 
        </Logo>
    </Container>
  );
}