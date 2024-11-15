import React from 'react'
import Product from '../Product';

import { Container, List} from './styles';
import { Game } from '../../Pages/Home';

export type Props = {
  title:string,
  background: 'gray' | 'black',
  games: Game[],
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(preco)
  }

const ProductList = ({background, title, games}: Props) => {


  const getGameTags = (game: Game)=> {
    const tags = [];

    if(game.release_date){
      tags.push(game.release_date)
    }

    if(game.prices.discount){
      tags.push(`${game.prices.discount}%`)
    }

    if(game.prices.current){
      tags.push(formataPreco(game.prices.current))
    }

    return tags
  }

  return (
    <Container background={background}>
      <h2>{title}</h2>
      <List>
        {
          games.map(game=>(

            <>
              <Product key={game.id} category={game.details.category} description={game.description} image={game.media.thumbnail} infos={getGameTags(game).map(String)} system={game.details.system} title={game.name} />
            </>
          ))
        }
      </List>
    </Container>
  )
}

export default ProductList
