import React from 'react'
import Product from '../Product';

import { Container, List} from './styles';

import Game from '../../models/game';

export type Props = {
  title:string,
  background: 'gray' | 'black',
  games: Game[],
}
const ProductList = ({background, title, games}: Props) => {
  return (
    <Container background={background}>
      <h2>{title}</h2>
      <List>
        {
          games.map(game=>(
            <Product key={game.id} category={game.category} description={game.description} image={game.image} infos={game.infos} system={game.system} title={game.title} />
          ))
        }
      </List>
    </Container>
  )
}

export default ProductList
