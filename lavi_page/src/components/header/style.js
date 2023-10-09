import React from "react";
import styled from 'styled-components'
import {theme} from '../../styles/theme'

export const Container = styled.header`
    color: white;
    height: 150px;
    padding 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${theme.colors.blue['500']};
    // background: rgb(0,0,0);
    // background: linear-gradient(0deg, ${theme.colors.blue['500']} 0%, ${theme.colors.gray['500']} 51%, ${theme.colors.blue['500']} 100%);
    
    @media screen and (max-width: 1000px){
        padding: 20px 20px;
        height: 60px;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        justify-content: space-around;
    }
`
export const Logo = styled.div`
    display: flex;
    
`