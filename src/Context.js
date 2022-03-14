import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./Reduce";
const AppContext = createContext();

const initState = {
  cart: [],
  amount: 0,
  total: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const CartHandler = (id) => {
    dispatch({ type: "AddToCart", payload: id });
  };
  const increase = (id) => {
    dispatch({ type: "Increase", payload: id });
  };
  const decrease = (id) => {
    dispatch({ type: "Decrease", payload: id });
  };
  useEffect(() => {
    dispatch({ type: "TotalItem" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        CartHandler,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const GlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
