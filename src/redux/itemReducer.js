import shortid from "shortid";
import { pickRandomColor } from "../constants/materialColors";

const initialState = {
  items: [
    { id: 1, name: "Item 1", color: pickRandomColor(), completed: false },
    { id: 2, name: "Item 2", color: pickRandomColor(), completed: true },
    { id: 3, name: "Item 3", color: pickRandomColor(), completed: true },
    { id: 4, name: "Item 4", color: pickRandomColor(), completed: false },
    { id: 5, name: "Item 5", color: pickRandomColor(), completed: true },
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
