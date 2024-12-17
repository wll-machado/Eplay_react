
import { Imagem, Precos, Titulo } from './style'
import Tag from '../Tag'
import Button from '../Button'


import {useGetGamesQuery} from '../../services/api'
import { convertToBrl } from '../../utils'

const Banner = () => {
  const { data : games } = useGetGamesQuery()


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
            De <span>{convertToBrl(games.prices.old)}</span> <br />
            por apenas {convertToBrl(games.prices.current)}
            </Precos>
          </div>
          <Button type='link' to={`/product/${games?.id}`} title='clique para aproveitar a oferta'>
            Aproveitar
          </Button>
        </div>
      </Imagem>
    </>
  )
}

export default Banner
