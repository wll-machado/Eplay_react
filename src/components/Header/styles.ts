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
margin-left: 40px;
`
export const LinkItem = styled.li`
margin-right:16px;

`

export const LinkCart = styled.a`
display: flex;

img{
  margin-left: 16px;
}
`

