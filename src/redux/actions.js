// actions.js
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
export const removeCard = (cardId) => ({
  type: 'REMOVE_CARD',
  payload: cardId,
});
