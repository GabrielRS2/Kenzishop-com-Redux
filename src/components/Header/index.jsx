import { CartHeaderContainer, HeaderContainer } from "./style"
import { BsCart } from 'react-icons/bs';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

export const Header = () => {

  const cartProducts = useSelector((state) => state.cart)

  const [ quantity, setQuantity ] = useState(1)

  const hystory = useHistory()

  useEffect(() => {
    setQuantity(cartProducts.reduce((a, b) => a + b.quantity, 0))
  }, [cartProducts])

  function handleGoCart() {
    hystory.push("/cart")
  }

  function handleGoHome() {
    hystory.push("/")
  }

  return (
    <HeaderContainer>
      <h1 onClick={handleGoHome}>Kenzie <span className="subTitle">Shop</span></h1>
      <CartHeaderContainer>
        {quantity > 0 && 
        <div className="cartQuantity">
          <p className="quantity">{quantity}</p>
        </div>
        }
        <button className="goCart" onClick={handleGoCart}><span className="cartIcon"><BsCart></BsCart></span> Carrinho</button>
      </CartHeaderContainer>
    </HeaderContainer>
  )
}