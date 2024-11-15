import styled from "styled-components";
import { cores } from "../../styles";
import { TagContainer } from "../Tag/style";

export const Banner = styled.div`
position: relative;
display: block;
height: 480px;
width: 100%;

background-repeat: no-repeat;
background-position:center top;
background-size: 100%;

padding-top: 16px ;

&::after {
  position: absolute;
  background-color: #000;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0.56;
  content: '';
}

${TagContainer}{
  margin-right: 8px;
}

.container {
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
}
`
export const Infos = styled.div`
padding: 16px;
background-color: ${cores.preta};
max-width: 290px;

h2{
  font-size: 32px;
}

p{
  font-size: 18px;
  margin: 16px 0;

  span{
    display: block;
    text-decoration: line-through;
  }
}
`
