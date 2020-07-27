import shortid from "shortid";
import { pickRandomColor } from "../constants/materialColors";

const initialState = {
  items: [
    { id: 1, name: "Turbonet", color: pickRandomColor(), completed: false },
    { id: 2, name: "Benz", color: pickRandomColor(), completed: true },
    { id: 3, name: "MacBook Pro", color: pickRandomColor(), completed: true },
    { id: 4, name: "Shoes", color: pickRandomColor(), completed: false },
    { id: 5, name: "PS5", color: pickRandomColor(), completed: true },
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
        completed: action.payload.completed,
      };

      return { ...state, items: [...state.items, newItem] };

    default:
      return state;
  }
};

export default itemReducer;
