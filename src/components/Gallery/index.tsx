import React from 'react'
import Section from '../Section'
import marvel1 from '../../assets/marvel1.jpg'
import marvel2 from '../../assets/marvel2.jpg'
import marvel3 from '../../assets/marvel3.jpg'
import marvel4 from '../../assets/marvel4.webp'
var marvel5 = 'https://www.youtube.com/shorts/eeRMSYsu6Hs?feature=share'
import zoom from '../../assets/zoom.png'
import play from '../../assets/play.png'
import { Action, Item, Items, Modal, ModalContent } from './styled'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: marvel1
  },
  {
    type: 'image',
    url: marvel2
  },
  {
    type: 'image',
    url: marvel3
  },
  {
    type: 'image',
    url: marvel4
  },
  {
    type: 'video',
    url: marvel5
  },
]

type Props = {
  name: string
  defaultCover: string
}

const Gallery = ({name,defaultCover}: Props) => {

  const getMediaCover = (item: GalleryItem) => {
    if(item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if(item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title='Galeria' background='black'>
        <Items>
         {mock.map(media =>
             <Item key={media.url}>
             <img src={getMediaCover(media)} alt={`${media.type} do jogo`} />
             <Action>
               <img src={getMediaIcon(media)} alt="ampliar imagem" />
             </Action>
           </Item>
         )}

        </Items>
      </Section>
      <Modal>
        <ModalContent className='container'>
          <header>
          <h4>{name}</h4>
          <span>X</span>
          </header>
          <img src={defaultCover} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
