import styled from 'styled-components'
import { cores } from '../../styles';

export const HeaderBar = styled.header`
 background-color: ${cores.cinza};
 border-radius: 16px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 max-width: 1024px;
 margin: 0 auto;
 padding: 24px;
 margin-top: 40px;
 margin-bottom: 80px;

 @media (max-width: 768px) {
  padding: 24px 10px;
 }
 div{
  display: flex;
  align-items: center;
 }
 span {
  font-family: "Press Start 2P";
  max-height: 60px;

  padding: 2px;
  border: 2px solid #eeeeee;

 }

 a{
  color: ${cores.branca};
  font-weight: bold;
 }
`

export const Links = styled.ul`
display: flex;
justify-content: space-between;
width: 30vw;
margin-left: 8%;


@media (max-width: 768px) {
  width: 40vw;
 }
`
export const LinkItem = styled.li`
/* margin-right:16px; */

`

export const LinkCart = styled.a`
display: flex;
cursor: pointer;

img{
  margin-left: 16px;
}

@media (max-width: 768px) {
  width: 16vw;
  font-size: 14px;
  align-items: center;
  img{
  margin-left: 2px;
}
 }
`

