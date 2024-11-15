import React from 'react'
import { Imagem, Precos, Titulo } from './style'

import bannerImg from '../../assets/Elden-Ring.webp'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => {
  return (
    <>
      <Imagem style={{backgroundImage: `url(${bannerImg})`}} >
        <div className="container">
          <Tag size='big'>Destaque do dia</Tag>
          <div>
            <Titulo>Elder Ring: Shadow of the Erdtree </Titulo>
            <Precos>
            De <span>R$ 250,00</span> <br />
            por apenas R$ 150,00
            </Precos>
          </div>
          <Button type='link' to='/produtos' title='clique para aproveitar a oferta'>
            Aproveitar
          </Button>
        </div>
      </Imagem>
    </>
  )
}

export default Banner
