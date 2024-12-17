import React from 'react'
import { CartContainer, Cartitem, Overlay, Prices, Quantity, SideBar } from './styles'
import Button from '../Button'
import Tag from '../Tag'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close,remove } from '../../store/reducers/cart'
import { convertToBrl, getTotalPrice } from '../../utils'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
  const navigate = useNavigate()
 const {isOpen, items} = useSelector((state:RootReducer) => state.cart)

 const dispatch = useDispatch()
 const closeCart = () => {
  dispatch(close())
}

const removeItem = (id:number) => {
  dispatch(remove(id))
}


const goToCheckout = () => {
  navigate('/checkout')
  closeCart()
}

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart}/>
      <div></div>
      <SideBar>
        <ul>
          {items.map(item => (
            <Cartitem key={item.id}>
            <img src={item.media.thumbnail} alt={item.name} />
            <div>
            <h3>{item.name}</h3>
            <Tag>{item.details.category}</Tag>
            <Tag>{item.details.system}</Tag>
            <span>{convertToBrl(item.prices.current)}</span>
            </div>
            <button onClick={() => removeItem(item.id)} type='button'>X</button>
          </Cartitem>
          ))}
        </ul>
        <Quantity>Dois jogos no carrinho</Quantity>
        <Prices>Total de {convertToBrl(getTotalPrice(items))} <span>Em ate 6x sem juros</span>  </Prices>
        <Button onClick={goToCheckout} type='button' title='Clique aqui para continuar com a compra' >Continuar com a compra</Button>
      </SideBar>
    </CartContainer>
  )
}

export default Cart
