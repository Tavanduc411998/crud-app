import rootReducer from "../reducers/index";

import { createStore } from "redux";

const configStore = () => {
  const store = createStore(rootReducer);
  return store;
};

export default configStore;
