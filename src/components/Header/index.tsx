import { HeaderBar, LinkCart, LinkItem, Links } from "./styles"
import store from '../../assets/carrinho-de-compras.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <HeaderBar>
     <div>
     <Link to='/'><span>EPLAY</span></Link>
      <nav>
        <Links>
          <LinkItem>
            <Link to='/categories'>Categorias</Link>
          </LinkItem>
          <LinkItem>
            <a href="#">
              Novidades
            </a>
          </LinkItem>
          <LinkItem>
            <a href="#">
              Promoções
            </a>
          </LinkItem>
        </Links>
      </nav>
     </div>
      <LinkCart href="#">
        0 - produtos
        <img src={store} alt="carrinho de compras" />
      </LinkCart>

    </HeaderBar>
  )
}

export default Header
