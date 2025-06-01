import shortid from 'shortid';

const columnsReducer = (statePart = [], action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return [...statePart, { ...action.newColumn, id: shortid() }];
    default:
      return statePart;
  }
};

export default columnsReducer;
