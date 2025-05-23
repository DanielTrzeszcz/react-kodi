import { useSelector } from 'react-redux';
import styles from './List.module.scss';
import Column from './../Column/Column';
import ColumnForm from './../ColumnForm/ColumnForm';
import Button from '../Button/Button';

const List = () => {
  const columns = useSelector(state => state.columns);
  const cards = useSelector(state => state.cards);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span>soon!</span></h2>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>

      <section className={styles.columns}>
        {columns.map(column => (
          <Column
            key={column.id}
            id={column.id}
            title={column.title}
            icon={column.icon}
            cards={cards.filter(card => card.columnId === column.id)} // <-- tu łączymy dane
          />
        ))}
      </section>

      <form className={styles.columnForm} onSubmit={e => e.preventDefault()}>
        <label>
          Title: <input type="text" />
        </label>
        <label>
          Icon: <input type="text" />
        </label>
        <Button>Add column</Button>
      </form>
    </div>
  );
};

export default List;
