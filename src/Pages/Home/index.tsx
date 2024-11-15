import React, { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'

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

  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [breve, setBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/promocoes')
    .then(res => res.json())
    .then(data => setPromocoes(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/em-breve')
    .then(res => res.json())
    .then(data => setBreve(data))
  },[])

  return (
    <>
        <Banner />
        <ProductList games={promocoes} title='Promoçoes' background='gray' />
        <ProductList games={breve} title='Em breve' background='black' />
    </>
  )
}

export default Home
