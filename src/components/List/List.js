import { useSelector, useDispatch } from 'react-redux';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';

const List = () => {
  const dispatch = useDispatch();
  const columns = useSelector(state => state.columns);
  const cards = useSelector(state => state.cards);

  const addColumn = column => {
    const newId = columns.length > 0 ? Math.max(...columns.map(c => c.id)) + 1 : 1;
    dispatch({
      type: 'ADD_COLUMN',
      newColumn: {
        id: newId,
        title: column.title,
        icon: column.icon || 'list',
      },
    });
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon!</span>
        </h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>

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
