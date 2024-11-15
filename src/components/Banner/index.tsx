import React, { useEffect, useState } from 'react'
import { Imagem, Precos, Titulo } from './style'

import bannerImg from '../../assets/Elden-Ring.webp'
import Tag from '../Tag'
import Button from '../Button'
import { Game } from '../../Pages/Home'
import { formataPreco } from '../ProductList'

const Banner = () => {

  const [games, setGames] = useState<Game>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/destaque')
    .then(res => res.json())
    .then(res => setGames(res))
  },[])

  if(!games){
    return(
      <h3>Carregando...</h3>
    )
  }

  return (
    <>
      <Imagem style={{backgroundImage: `url(${games?.media.cover})`}} >
        <div className="container">
          <Tag size='big'>Destaque do dia</Tag>
          <div>
            <Titulo>{games?.name}</Titulo>
            <Precos>
            De <span>{formataPreco(games.prices.old)}</span> <br />
            por apenas {formataPreco(games.prices.current)}
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
