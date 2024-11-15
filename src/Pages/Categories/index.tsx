import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'

import { Game } from '../Home';

const promocoes:Game[] = []

const breve:Game[] = []

const Categories = () => {

  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
    .then(res => res.json())
    .then(res => setGamesRpg(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/espotes')
    .then(res => res.json())
    .then(res => setGamesEsporte(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
    .then(res => res.json())
    .then(res => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
    .then(res => res.json())
    .then(res => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
    .then(res => res.json())
    .then(res => setGamesLuta(res))
  },[])

  return (
      <>
        <ProductList games={gamesRpg} title='RPG' background='gray' />
        <ProductList games={gamesAcao} title='Ação' background='black' />
        <ProductList games={gamesLuta} title='Luta' background='gray' />
        <ProductList games={gamesSimulacao} title='Simulação' background='black' />
        <ProductList games={gamesEsporte} title='Esporte' background='gray' />
      </>
  )
}

export default Categories
