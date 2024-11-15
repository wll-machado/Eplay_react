import styled from 'styled-components'

import { Props } from '.';
import { cores } from '../../styles';
import { Card } from '../Product/styles';

export const Container = styled.section<Omit<Props, 'title' | 'games'>>`
padding: 32px 0;
background-color: ${props => props.background === 'black' ? cores.preta : cores.cinza};

h2{
  margin-left: 9rem;
}

${Card}{
  background-color: ${props => props.background === 'black' ? cores.cinza : cores.preta};
}
`;


export const List = styled.ul`
max-width: 64rem;
margin: 0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr ;
gap: 24px;
`
