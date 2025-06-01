import { useSelector } from 'react-redux';
import { getFavoriteCards } from '../../redux/selectors';

import Card from '../Card/Card';
import styles from './Favorite.module.scss';

const Favorite = () => {
  const favoriteCards = useSelector(getFavoriteCards);

  if (favoriteCards.length === 0) {
    return <p className={styles.empty}>No favorite cards...</p>;
  }

  return (
    <section className={styles.favorite}>
      <h2 className={styles.heading}>Favorite Cards</h2>
      <ul className={styles.cardList}>
        {favoriteCards.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </section>
  );
};

export default Favorite;
