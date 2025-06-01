import shortid from 'shortid';

const listsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_LIST':
      return [...statePart, { ...action.newList, id: shortid() }];
    default:
      return statePart;
  }
};

export default listsReducer;
