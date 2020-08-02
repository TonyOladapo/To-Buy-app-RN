export const addItem = (newItem) => {
  return {
    type: "ADD_ITEM",
    payload: newItem,
  };
};

export const updateItem = (item_id, updatedInfo) => {
  return {
    type: "UPDATE_ITEM",
    item_id,
    updatedInfo,
  };
};

export const deleteItem = (item_id) => {
  return {
    type: "DELETE_ITEM",
    payload: item_id,
  };
};
