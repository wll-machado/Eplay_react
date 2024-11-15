import React from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'
import defaultCover from '../../assets/marvelCover.jpg'

const Product = () => {

  const {id} = useParams()

  return (
    <>
      <Hero />
      <Section title='Sobre o jogo' background='black'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet error pariatur accusantium, nostrum, minus sunt id fugit sit iusto eos quidem ullam libero. Harum nostrum culpa molestiae architecto illum perspiciatis!
        </p>
      </Section>
      <Section title='Mais Detalhes' background='gray'>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet error pariatur accusantium, nostrum, minus sunt id fugit sit iusto eos quidem ullam libero. Harum nostrum culpa molestiae architecto illum perspiciatis!
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus ullam similique vel quisquam facilis, error dicta odit architecto aperiam earum ipsum facere quae ipsam optio amet quia debitis et dolorem.
        </p>
      </Section>
      <Gallery name='Jogo' defaultCover={defaultCover}/>
    </>
  )
}

export default Product
