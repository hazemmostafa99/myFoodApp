import { food } from "./data";

const reducer = (state, action) => {
  if (action.type === "AddToCart") {
    const myCart = food.filter((el) => el.id === action.payload);
    return { ...state, cart: [...state.cart, ...myCart] };
  }
  if (action.type === "Increase") {
    const amountIncrease = state.cart
      .map((ele) => {
        if (ele.id === action.payload) {
          return {
            ...ele,
            amount: ele.amount + 1,
          };
        }
        return ele;
      })
    return { ...state, cart: amountIncrease };
  }
  if (action.type === "Decrease") {
    const amountDecrease = state.cart
      .map((ele) => {
        if (ele.id === action.payload) {
          return { ...ele, amount: ele.amount - 1 };
        }
        return ele;
      })
      .filter((ele) => ele.amount >= 1);
    return { ...state, cart: amountDecrease };
  }
  if (action.type === "TotalItem") {
    let { total, amount } = state.cart.reduce(
      (totalCart, ele) => {
        const { price, amount } = ele;
        const totalItem = price * amount;
        totalCart.total += totalItem;
        totalCart.amount += amount;
        return totalCart;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    return { ...state, amount, total };
  }
  return state;
};
export default reducer;
