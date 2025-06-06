import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';
import { useSelector } from 'react-redux';
import { getFilteredCards } from '../../redux/selectors';

const Column = (props) => {
  const cards = useSelector((state) => getFilteredCards(state, props.id));

  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${props.icon}`} />
      <h2 className={styles.title}>{props.title}</h2>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
      <CardForm columnId={props.id} />
    </article>
  );
};

export default Column;
