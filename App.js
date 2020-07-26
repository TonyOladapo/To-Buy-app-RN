import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import itemReducer from "./src/redux/itemReducer";
import Navigator from "./Navigator";

const App = () => {
  const store = createStore(itemReducer);

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
