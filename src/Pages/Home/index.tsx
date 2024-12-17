import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'
export interface GalleryItem  {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: number
  prices:{
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media:{
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {

  const {data: onSaleGames} = useGetOnSaleQuery();
  const { data: soonGames} = useGetSoonQuery();

  if(onSaleGames && soonGames){
    return (
      <>
          <Banner />
          <ProductList games={ onSaleGames} title='Promoçoes' $background='gray' />
          <ProductList games={soonGames} title='Em breve' $background='black' />
      </>
    )
  }

  return (
    <h4>Carregando...</h4>
  )

}

export default Home
