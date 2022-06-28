import { addCartItem, removeCartItem } from "./actions";

export const addCartItemThunk = (product) => {

  return (dispatch, getstate) => {
    
    const { cart } = getstate()

    let isIncluded = false;
    let quantity = 0;

    cart.forEach(element => {
      if(element.id === product.id) {
        isIncluded = true;
        quantity = element.quantity + 1;
      } 
    });

    if(isIncluded) {
      
      const newProduct = {...product, quantity: quantity};
      const newCart = [...cart.filter((item) => {return item.id !== product.id}), newProduct];

      localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));

      dispatch(addCartItem(newCart));
    } else {

      const newProduct = {...product, quantity: 1};
      const newCart = [...cart, newProduct]

      localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart));

      dispatch(addCartItem(newCart));
    }
  };
};

export const removeCartItemThunk = (product) => {

  return (dispatch, getstate) => {
    
    const { cart } = getstate()

    const newCart = [...cart.filter((item) => {return item.id !== product.id})]

    localStorage.setItem("@KenzieShop:cart", JSON.stringify(newCart))

    dispatch(removeCartItem(newCart))

  };
};