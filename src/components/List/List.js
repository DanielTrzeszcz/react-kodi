import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import { getListById, getColumnsByList } from '../../redux/selectors';
import SearchForm from './../SearchForm/SearchForm'; 
import ListForm from '../ListForm/ListForm';


const List = () => {
  const { listId } = useParams();
  const numericListId = parseInt(listId, 10); 

  const dispatch = useDispatch();
  const listData = useSelector(state => getListById(state, numericListId));
  const columns = useSelector(state => getColumnsByList(state, numericListId));
  const cards = useSelector(state => state.cards);

  const addColumn = column => {
    const newId = columns.length > 0 ? Math.max(...columns.map(c => c.id)) + 1 : 1;
    dispatch({
      type: 'ADD_COLUMN',
      newColumn: {
        id: newId,
        listId: numericListId,
        title: column.title,
        icon: column.icon || 'list',
      },
    });
  };

  if (!listData) return <p>List not found.</p>; 

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title} <span>!</span>
        </h2>
      </header>
      <p className={styles.description}>{listData.description}</p>
      <SearchForm />


      <section className={styles.columns}>
        {columns.map(column => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={cards.filter(card => card.columnId === column.id)}
          />
        ))}
      </section>

      <div className={styles.columnForm}>
        <ColumnForm action={addColumn} />
      </div>
    </div>
  );
};

export default List;
