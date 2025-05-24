import { createStore } from 'redux';
import initialState from './initialState'; // 👈 TO DODAJ

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_COLUMN') {
    return { 
      ...state, 
      columns: [...state.columns, action.newColumn] 
    };
  }

  if (action.type === 'ADD_CARD') {
    return {
      ...state,
      cards: [...state.cards, action.newCard],
    };
  }

  return state;
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
