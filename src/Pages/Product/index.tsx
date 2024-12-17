import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import { Game } from '../Home'
import { useGetGameQuery } from '../../services/api'

const Product = () => {

  const {id} = useParams()

  const { data: game } = useGetGameQuery(id!)

  if(!game){
    return(
      <h3>Carregando...</h3>
    )
  }

  return (
    <>
      <Hero game={game} />
      <Section title='Sobre o jogo' $background='black'>
        <p>
          {game.description}
        </p>
      </Section>
      <Section title='Mais Detalhes' $background='gray'>
        <p>
          <b>Plataforma: {game.details.system}</b>
          <br />
          <b>Desenvolvedor: {game.details.developer}</b>
          <br />
          <b>Editora: {game.details.publisher}</b>
          <br />
          <b>Idiomas: {game.details.languages.join(', ')}</b>
        </p>
      </Section>
      <Gallery items={game.media.gallery} name={game.name} defaultCover={game.media.cover}/>
    </>
  )
}

export default Product
