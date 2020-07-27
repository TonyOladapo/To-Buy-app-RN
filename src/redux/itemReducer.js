import shortid from "shortid";
import { pickRandomColor } from "../constants/materialColors";

const initialState = {
  items: [
    // { id: 1, name: "Turbonet", color: pickRandomColor() },
    // { id: 2, name: "Turbonet", color: pickRandomColor() },
    // { id: 3, name: "Turbonet", color: pickRandomColor() },
    // { id: 4, name: "Turbonet", color: pickRandomColor() },
    // { id: 5, name: "Turbonet", color: pickRandomColor() },
  ],
};

const generateId = () => {
  return `${new Date().getTime()}-${shortid.generate()}`;
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newItem = {
        id: generateId(),
        name: action.payload.name,
        color: pickRandomColor(),
      };

      return { ...state, items: [...state.items, newItem] };

    default:
      return state;
  }
};

export default itemReducer;
