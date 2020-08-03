import shortid from "shortid";
import { pickRandomColor } from "../../constants/materialColors";

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

    case "UPDATE_ITEM":
      const updatedItemInfo = state.items.map((item) => {
        item.id === action.item_id ? { ...state, ...action.updatedInfo } : item;
      });

      return { ...state, items: updatedItemInfo };

    case "DELETE_ITEM":
      const filteredItems = state.items.filter(
        (item) => item.id !== action.payload
      );

      return { ...state, items: filteredItems };

    default:
      return state;
  }
};

export default itemReducer;
