import React, { useState } from 'react'
import Section from '../Section'
import marvel1 from '../../assets/marvel1.jpg'
import marvel2 from '../../assets/marvel2.jpg'
import marvel3 from '../../assets/marvel3.jpg'
import marvel4 from '../../assets/marvel4.webp'
var marvel5 = 'https://www.youtube.com/embed/G7c_Fc87WkU?si=Otkanquvg7zTewnV'
import zoom from '../../assets/zoom.png'
import play from '../../assets/play.png'
import { Action, Item, Items, Modal, ModalContent } from './styled'
import { GalleryItem } from '../../Pages/Home'



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

interface ModalState extends GalleryItem {
  isVisible: boolean
}

const Gallery = ({name,defaultCover}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    type: 'image',
    url: ''
  })

  const getMediaCover = (item: GalleryItem) => {
    if(item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if(item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModal({isVisible: false,
      type: 'image',
      url: ''})
  }

  return (
    <>
      <Section title='Galeria' background='black'>
        <Items>
         {mock.map(media =>
             <Item key={media.url} onClick={() => {
              setModal({isVisible: true,
              type: media.type,
              url: media.url})}}>
             <img src={getMediaCover(media)} alt={`${media.type} do jogo`} />
             <Action>
               <img src={getMediaIcon(media)} alt="ampliar imagem" />
             </Action>
           </Item>
         )}

        </Items>
      </Section>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className='container'>
          <header>
          <h4>{name}</h4>
          <span onClick={() =>
           closeModal()
          }>X</span>
          </header>
          {
            modal.type === 'image' ? (
              <img src={modal.url} alt="Game Image" />
            ):
            (
              <iframe src={modal.url} title='video'></iframe>
            )
          }
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default Gallery
