import styles from './Column.module.scss';
import Card from '../Card/Card';
import CardForm from '../CardForm/CardForm';

const Column = ({ id, title, icon, cards, action }) => {
  const dodajKarte = (nowaKarta) => {
    if (action) {
      action(nowaKarta, id);
    }
  };

  return (
    <article className={styles.column}>
      <span className={`${styles.icon} fa fa-${icon}`} />
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.cards}>
        {cards.map(card => (
          <Card key={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm action={dodajKarte} />
    </article>
  );
};

export default Column;
