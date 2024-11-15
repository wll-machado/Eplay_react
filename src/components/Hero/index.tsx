import React from 'react'
import bannerImg from '../../assets/marvel.jpg'
import { Banner, Infos } from './styles'
import Tag from '../Tag'
import Button from '../Button'

const Hero = () => {
  return (
    <Banner style={{backgroundImage: `url(${bannerImg})`}}>
      <div className="container">
        <div>
          <Tag>
            Aventura
          </Tag>
          <Tag>
            Ação
          </Tag>
        </div>
        <Infos>
          <h2>Marvel</h2>
          <p><span>
          De R$ 250,00
          </span>
            por apenas R$ 150,00
          </p>
          <Button title='clique para aproveitar a oferta' type='button' variant='primary'>Adicionar ao carrinho</Button>
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
