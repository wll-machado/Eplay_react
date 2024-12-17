import styled from "styled-components";
import { cores } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const Overlay = styled.div`
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background-color: rgba(0, 0, 0, 0.7);

`

export const CartContainer = styled.div `
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1000;

display: none;
justify-content: flex-end;

&.is-open {
  display: flex;
}
`
export const SideBar = styled.aside`
 background-color:
 ${cores.cinza};
 max-width: 360px;
 height: 100%;
 z-index: 1000;
 padding: 40px 16px;

 ${ButtonContainer} {
  width: 100%;
 }
`
export const Prices = styled.p`
font-weight: bold;
font-size: 14px;
color: ${cores.branca};
margin-bottom: 8px;
span {
  display: block;
  font-size: 12px;
  color: ${cores.branca};
}
`

export const Quantity = styled.p`
font-weight: bold;
font-size: 16px;
color: ${cores.branca};
margin-bottom: 8px;
`
export const Cartitem = styled.li`
position: relative;
display: flex;
margin-bottom: 1.875rem ;
border-bottom: 1px solid lightgray;
padding: 8px 0;

img{
  width: 80px;
  height: 80px;
  margin-right: 16px;
  object-fit: cover;
}

h3{
  color: ${cores.branca};
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 8px;
}

span{
 display: block;
 font-size: 14px;
 color: ${cores.branca};
  font-weight: bold;
  margin-top: 8px;
}

button {
  width: 16px;
  height: 16px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 8px;
  right: -5px;
  color: ${cores.branca};
  font-weight: bold;
  cursor: pointer;
}

`
