import React from 'react'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { add } from '../../store/reducers/cart';
import { useDispatch } from 'react-redux'
type Props = {
  game : Game
}

const Hero = ({game}:Props) => {

  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
  }

  return (
    <Banner style={{backgroundImage: `url(${game.media.cover})`}}>
      <div className="container">
        <div>
          <Tag>
            {game.details.category}
          </Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
          {game.prices.discount && (
              <span>
              De R$ {game.prices.old}0
              </span>
            )}
            {game.prices.current && (
             <>por apenas R${game.prices.old}</>
            )}

          </p>
          {
            game.prices.current ? (
              <Button onClick={addToCart} title='clique para aproveitar a oferta' type='button' $variant='primary'>Adicionar ao carrinho</Button>
            ) : (
              <p>Em breve <br />
                <b>{game.release_date}</b>
              </p>
            )
          }
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
