import img from '../../assets/zelda.webp'
import Tag from '../Tag'

import { Card, Descricao, Infos, Titulo } from './styles'

type Props = {
  title: string;
  category: string;
  system: string;
  description: string;
  infos: string[];
  image: string;
}

const Product = ({category,description,infos,image,title,system}: Props) => {
  return (
    <Card>
      <img src={image} alt={title}/>
      <Infos>
        {infos.map(info=> <Tag key={info}>{info}</Tag>)}
      </Infos>
      <Titulo>{title}</Titulo>
      <Tag>{category}</Tag>
      <Tag>{system}</Tag>
      <Descricao>
       {description}
      </Descricao>
    </Card>
  )
}

export default Product
