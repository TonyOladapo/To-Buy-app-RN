import shortid from "shortid";

const initialState = {
  items: [],
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
      };

      return { ...state, items: [...state.items, newItem] };

    default:
      return state;
  }
};

export default itemReducer;
