import { useState } from "react";

export const useInput = (initialState) => {
  const [state, setState] = useState(initialState);

  const handleInputChange = (text) => {
    setState(text);
  };

  const resetTextInput = () => {
    setState("");
  };

  return [state, handleInputChange, resetTextInput];
};
