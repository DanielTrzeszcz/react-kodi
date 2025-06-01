import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/actions';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(id));
  };

  const handleRemoveCard = () => {
    dispatch(removeCard(id));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={handleToggleFavorite}
        className={clsx(styles.favoriteButton, isFavorite && styles.active)}
      >
        <i className="fa fa-star-o" />
      </button>
      <button
        onClick={handleRemoveCard}
        className={styles.removeButton}
      >
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

export default Card;
