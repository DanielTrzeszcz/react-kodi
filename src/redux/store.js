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
export const getListById = ({ lists }, listId) =>
  lists.find(list => list.id === listId);


export const getColumnsByList = ({ columns }, listId) =>
  columns.filter(column => column.listId === listId);

export const getFavoriteCards = ({ cards }) =>
  cards.filter(card => card.isFavorite);
export const getAllLists = (state) => state.lists;

// --- Kreatory akcji ---
export const addCard = payload => ({
  type: 'ADD_CARD',
  newCard: payload,
});
export const toggleCardFavorite = cardId => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload: cardId,
});
export const addColumn = payload => ({
  type: 'ADD_COLUMN',
  newColumn: payload,
});

export const updateSearchString = payload => ({
  type: 'UPDATE_SEARCHSTRING',
  payload,
});

export const addList = payload => ({
  type: 'ADD_LIST',
  newList: payload,
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

    case 'ADD_LIST':
      return {
        ...state,
        lists: [...state.lists, action.newList],
      };

       case 'TOGGLE_CARD_FAVORITE':
      return {
        ...state,
        cards: state.cards.map(card =>
          card.id === action.payload
            ? { ...card, isFavorite: !card.isFavorite }
            : card
        ),
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
