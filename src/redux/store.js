import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

// --- Selektory ---
export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card =>
    card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = (state) => state.columns;
export const getAllCards = (state) => state.cards;
export const getSearchString = (state) => state.searchString;

// --- Kreatory akcji ---
export const addCard = payload => ({
  type: 'ADD_CARD',
  newCard: payload,
});

export const addColumn = payload => ({
  type: 'ADD_COLUMN',
  newColumn: payload,
});

export const updateSearchString = payload => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

// --- Reducer ---
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [...state.columns, action.newColumn],
      };

    case 'ADD_CARD':
      return {
        ...state,
        cards: [...state.cards, action.newCard],
      };

    case 'UPDATE_SEARCHSTRING':
      return {
        ...state,
        searchString: action.payload,
      };

    default:
      return state;
  }
};

// --- Store ---
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
