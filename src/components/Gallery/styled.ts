import styled, { keyframes } from "styled-components";
import { cores } from "../../styles";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const Items = styled.ul`
display: flex;
flex-wrap: wrap;
gap: 16px;
`

export const Item = styled.li`
position: relative;
width: 150px;
height: 150px;
> img {
  border: 2px solid ${cores.branca};
  border-radius: 8px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  object-position: left;
}
`
export const Action = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255,255,255,0.53);
display: flex;
justify-content: center;
align-items: center;
border-radius: 8px;
opacity: 0;
cursor: pointer;
transition: all 0.4s ease;
&:hover{
  opacity: 1;
}
img{
  height: 40px;
  width: 40px;
}
`
export const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
z-index: 1;

display: none;
justify-content: center;
align-items: center;

&.visivel{
  display: flex;
}

.overlay{
  position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0,0,0,0.53);

}

`
export const ModalContent = styled.div`
max-width: 960px;
position: relative;
z-index: 1;
header{
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;

  h4{
    font-size: 18px;
    font-weight: bold;
  }
}


span{
  display: block;
  position: absolute;
  right: 0;
  width: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover{
    color: red;
    font-weight: bolder;
    animation: ${pulse} 2s infinite;
  }
}

img,iframe{
  width: 650px;
  height: 450px;
}
`
