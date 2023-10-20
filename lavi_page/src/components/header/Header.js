import React from "react";
import { Container, Logo, Title, SecLogos } from "./style";
import lavi_logo from '../../assets/lavi_logo.png'
import ufrj_logo from '../../assets/ufrj_logo_2.png'
import pem_logo from '../../assets/pem_logo.png'

export function Header(props) {
  return (
    <Container>
        <Logo src={lavi_logo}/>
        <Title>Laboratory of Acoustics and Vibrations</Title>
        <SecLogos>
          <img src={ufrj_logo} width={"142px"}/>
          <img src={pem_logo} width={"142px"}/>
        </SecLogos>
    </Container>
  );
}