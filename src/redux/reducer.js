import cardsReducer from './reducers/cardsReducer';
import columnsReducer from './reducers/columnsReducer';
import listsReducer from './reducers/listsReducer';
import searchStringReducer from './searchStringReducer';

const reducer = (state, action) => ({
  cards: cardsReducer(state.cards, action),
  columns: columnsReducer(state.columns, action),
  lists: listsReducer(state.lists, action),
  searchString: searchStringReducer(state.searchString, action),
});

export default reducer;
