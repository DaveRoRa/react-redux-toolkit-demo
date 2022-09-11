import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice.js";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(ordered())}>Order Cake</button>
      <button onClick={() => dispatch(restocked(4))}>Restock cakes </button>
    </div>
  );
};
