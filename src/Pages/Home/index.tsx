import React from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/ProductList'
import Game from '../../models/game'
import astrobot from '../../assets/astrobot.webp';
import elden from '../../assets/Elden-Ring.webp';
import fifa from '../../assets/fifa-24.webp';
import zelda from '../../assets/zelda.webp';
import wukong from '../../assets/wukong.png';
import cod from '../../assets/cod.avif';
import baldur from '../../assets/baldur.webp';
import dogma from '../../assets/dogma2.jpg';

const promocoes:Game[] = [
  {
    id: 1,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: astrobot,
    infos: ['-10%', 'R$ 150'],
    system: 'PS5',
    title: 'Astrobot',
  },
  {
    id: 2,
    category: 'Ação',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: elden,
    infos: ['-40%', 'R$ 150'],
    system: 'PC',
    title: 'Elden ring',
  },
  {
    id: 3,
    category: 'Esporte',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: fifa,
    infos: ['-15%', 'R$ 250'],
    system: 'PC',
    title: 'Fifa 24',
  },
  {
    id: 4,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: zelda,
    infos: ['-10%', 'R$ 250'],
    system: 'Switch',
    title: 'Zelda',
  }
]

const breve:Game[] = [
  {
    id: 5,
    category: 'FPS',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: cod,
    infos: ['-10%', 'R$ 150'],
    system: 'pc',
    title: 'Call of Duty 6',
  },
  {
    id: 6,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: wukong,
    infos: ['-10%', 'R$ 270'],
    system: 'PC',
    title: 'Black Myth Wukong',
  },
  {
    id: 7,
    category: 'RPG',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: baldur,
    infos: ['-17%', 'R$ 210'],
    system: 'PC',
    title: 'Baldur Gates 3',
  },
  {
    id: 8,
    category: 'Aventura',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eum.',
    image: dogma,
    infos: ['-10%', 'R$ 150'],
    system: 'PC',
    title: 'Dragons Dogma 2',
  },
]

const Home = () => {
  return (
    <>
        <Banner />
        <ProductList games={promocoes} title='Promoçoes' background='gray' />
        <ProductList games={breve} title='Em breve' background='black' />
      </>
  )
}

export default Home
