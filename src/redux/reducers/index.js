import cardsReducer from './cardsReducer';
import columnsReducer from './columnsReducer';
import listsReducer from './listsReducer';
import searchStringReducer from './searchStringReducer';

const rootReducer = (state, action) => ({
  cards: cardsReducer(state.cards, action),
  columns: columnsReducer(state.columns, action),
  lists: listsReducer(state.lists, action),
  searchString: searchStringReducer(state.searchString, action),
});

export default rootReducer;
