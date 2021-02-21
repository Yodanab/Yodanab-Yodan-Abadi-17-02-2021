import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    font-size:16px;
  
    h1,h2,h3,h4{
     font-weight:400;
     color:${({ theme }) => theme.textColor};
     margin-left:5px;
    }
    div{
      box-sizing:border-box;
    }
  }
  
  `;
