import styled from "styled-components";
import { TagContainer } from "../Tag/style";

export const Imagem = styled.div`
width: 100%;
height: 560px;
display: block;
padding-top: 360px;

background-repeat: no-repeat;
background-size: cover;
background-position: bottom center;

${TagContainer}{

  position: absolute;
  top: -340px;
}
 .container {
  position: relative;
  max-width: 1024px;
 width: 100%;
 margin: 0 auto;

 display: flex;
 justify-content: space-between;
 align-items: flex-end;
 }
`

export const Titulo = styled.h2`
font-size: 36px;
font-weight: bold;
max-width: 450px;
`

export const Precos = styled.p`
 font-size: 24px;
 margin-top: 24px;
 font-weight: bold;
 span{
  text-decoration: line-through;
 }
`
