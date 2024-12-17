import React, { useEffect, useState } from 'react'
import ProductList from '../../components/ProductList'

import { Game } from '../Home';

import { useGetActionGamesQuery,  useGetLutaGamesQuery, useGetRpgGamesQuery, useGetSimulacaoGamesQuery, useGetEsporteGamesQuery } from '../../services/api'

const promocoes:Game[] = []

const breve:Game[] = []

const Categories = () => {
  const {data: gamesRpg} = useGetRpgGamesQuery();
  const { data: gamesAcao} = useGetActionGamesQuery();
  const { data: gamesLuta} = useGetLutaGamesQuery();
  const { data: gamesSimulacao} = useGetSimulacaoGamesQuery();
  const { data: gamesEsporte} = useGetEsporteGamesQuery();

  if(gamesRpg && gamesAcao && gamesLuta && gamesSimulacao && gamesEsporte){
    return (
      <>
        <ProductList games={gamesRpg} title='RPG' $background='gray' />
        <ProductList games={gamesAcao} title='Ação' $background='black' />
        <ProductList games={gamesLuta} title='Luta' $background='gray' />
        <ProductList games={gamesSimulacao} title='Simulação' $background='black' />
        <ProductList games={gamesEsporte} title='Esporte' $background='gray' />
      </>
  )
  }

  return <h4>Carregando...</h4>
}

export default Categories
