import { HeaderBar, LinkCart, LinkItem, Links } from "./styles"
import store from '../../assets/carrinho-de-compras.png'
import { Link } from "react-router-dom"
import { open } from "../../store/reducers/cart"
import { useDispatch, useSelector } from "react-redux"
import { RootReducer } from "../../store"

const Header = () => {

  const dispatch = useDispatch()
  const {items} = useSelector((state:RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }


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
      <LinkCart onClick={openCart}>
        {items.length} - produtos
        <img src={store} alt="carrinho de compras" />
      </LinkCart>

    </HeaderBar>
  )
}

export default Header
