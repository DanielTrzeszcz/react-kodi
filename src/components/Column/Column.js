import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux'; // ← dodaj to

const Column = ({ id, title, icon, cards }) => {
  const searchString = useSelector(state => state.searchString); // ← pobierz z reduxa

  // filtrujemy karty po tytule
  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${icon}`} />
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>
        {filteredCards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );
};

export default Column;
