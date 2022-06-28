import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Header } from "../../components/Header";
import { Product } from "../../components/Product";
import { Container, ProductsList } from "./style";

export const Home = () => {

  const products = useSelector((state) => state.products);



  return(
    <Container>
      <Header>
      </Header>
      <ProductsList>
        {products.map((product) => <Product key={product.id} product={product}/>)}
      </ProductsList>
    </Container>
  );
}