// localStorageMiddleware.js
import mode from '../Reducer/AllReducer'
const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();
  
    // Save specific state values to localStorage here
    localStorage.setItem("mode", state.mode);
    localStorage.setItem("fileCheck", state.fileCheck);
  
    return result;
  };
  
  export default localStorageMiddleware;
  