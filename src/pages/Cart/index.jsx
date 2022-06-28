import { useSelector } from "react-redux";
import { CartInfo } from "../../components/CartInfo";
import { Header } from "../../components/Header";
import { ProductCart } from "../../components/ProductCart";
import { Container, MainCart } from "./style";

export const Cart = () => {

  const cartProducts = useSelector((state) => state.cart)

  return(
    <Container>
      <Header></Header>
      <MainCart>
        <div className="cartListContainer">
          <div className="listInfoContainer">
            <p>Produto</p>
            <p className="priceText">Preço</p>
          </div>
          <ul>
            {cartProducts.map((product) => <ProductCart key={product.id} product={product}/>)}
          </ul>
        </div>
        <CartInfo />
      </MainCart>
    </Container>
  );
}