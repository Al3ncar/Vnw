import React, { useState } from "react"
import GlobStyle from "./styled"
import Header from "./components/Header/header"
import Main from "./components/Main/main"
import Footer from "./components/Footer/footer"
import BtnMode from "./components/theme/img_theme/btnMode.webp"

import { ThemeProvider } from "styled-components"
import{darkTheme, lightTheme} from "./components/theme/index"

import styled from "styled-components"
  const Cont = styled.div`
    width: 3%;
    position:absolute;
    right:3%;
    top:2%;
  `
  const BtnCont = styled.button`
    width:100%;
    position: relative;
    border-radius: 50%;
    background-color: ${(props)  => props.theme.collors.cor7};
    border: none;
    &:hover{transform: scale(1.1);}
  `
  const Log = styled.img`
    width:100%;
  `  
export default function  Vnw({children}){
 
  const [theme, setTheme] = useState(lightTheme)
  const trocar =()=>{setTheme(theme === lightTheme? darkTheme : lightTheme)}
  return(
    <ThemeProvider theme={theme} >
      <Cont>
          <BtnCont onClick={()=>{trocar()}}>
            <Log src={BtnMode} alt="Logo VainaWeb"/>
          </BtnCont>
      </Cont>
      <GlobStyle/>
      <Header/>
      <Main/>
      <Footer/>
    </ThemeProvider>
  )
}