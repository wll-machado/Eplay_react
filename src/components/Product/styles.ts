import styled from "styled-components";
import { cores } from "../../styles"
import { Link } from "react-router-dom";

export const Card = styled(Link)`
position: relative;
background-color: ${cores.cinza};
border-radius: 8px;
padding: 8px;
text-decoration: none;
color: ${cores.branca};
display: block;
img{
  width: 100%;
  height: 250px;
  object-fit: cover;
}
`
export const Infos = styled.div`
position: absolute;
top:16px;
right:16px;
`

export const Titulo = styled.h3`
font-weight: bold;
font-size: 16px;
display:block;
margin-top: 16px;
margin-bottom: 8px;
`;

export const Descricao = styled.p`
font-size: 14px;
line-height: 22px;
display: block;
margin-top: 16px;
`;

