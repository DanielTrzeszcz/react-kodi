// selectors.js
import strContains from '../utils/strContains';

export const getFilteredCards = ({ cards, searchString }, columnId) =>
  cards.filter(card =>
    card.columnId === columnId && strContains(card.title, searchString)
  );

export const getAllColumns = state => state.columns;
export const getAllCards = state => state.cards;
export const getSearchString = state => state.searchString;
export const getListById = ({ lists }, listId) =>
  lists.find(list => list.id === listId);

export const getColumnsByList = ({ columns }, listId) =>
  columns.filter(column => column.listId === listId);

export const getFavoriteCards = ({ cards }) =>
  cards.filter(card => card.isFavorite);

export const getAllLists = state => state.lists;
