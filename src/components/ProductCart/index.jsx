import { ImgContainer, InfoContainer, ProductItem } from "./style";
import { useDispatch } from "react-redux/es/exports";
import { removeCartItemThunk } from "../../store/modules/cart/thunks";

export const ProductCart = ({product}) => {

  const dispatch = useDispatch()

  function handleRemoveCartItem() {
    dispatch(removeCartItemThunk(product))
  }

  return(
    <ProductItem>
      <ImgContainer>
        <img src={product.link} alt={product.name}></img>
      </ImgContainer>
      <InfoContainer>
        <div className="nameContainer">
          <p className="name">{product.name}</p>
          <p className="models">Modelos: {product.models.map((model, index) => index + 1 === product.models.length ? model : model + ", ")}</p>
          <p className="models">quantidade: {product.quantity}</p>
        </div>
        <div className="priceContainer">
          <p className="price"><span className="priceProductCart">Preço: </span>R$ {product.price.toFixed(2).toString().replaceAll(".", ",")}</p>
          <button className="removeCartButton" onClick={handleRemoveCartItem}>Remover Produto</button>
        </div>
      </InfoContainer>
    </ProductItem>
  )
}