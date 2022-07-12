import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: 'Roboto', sans-serif;

  }
  h2,h4{
    color:${(props) => props.theme.collors.cor3};
  }
  p{    color:${(props) => props.theme.collors.cor6}}
  html{
    scroll-behavior: smooth;
  }
  body{
    background-color: ${(props) => props.theme.collors.cor1};
  }
  
`
export default GlobalStyle 

