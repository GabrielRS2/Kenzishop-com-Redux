import { Container } from "./style";
import { useSelector } from "react-redux/es/exports";
import { useEffect, useState } from "react";

export const CartInfo = () => {

  const cartProducts = useSelector((state) => state.cart);
  const [ total, setTotal ] = useState(0);
  const [ quantity, setQuantity ] = useState(0)

  useEffect(() => {
    setTotal(cartProducts.reduce((a, b) => a + b.price*b.quantity, 0))
    setQuantity(cartProducts.reduce((a, b) => a + b.quantity, 0))
  }, [cartProducts])

  return(
    <Container>
      <h2>Resumo do Pedido</h2>
      <div className="resumeContainer">
        <p>quantidade: {quantity}</p>
        <p>Total: {total.toFixed(2).toString().replaceAll(".", ",")}</p>
      </div>
      <button className="finish">Finalizar compra</button>
    </Container>
  );
}