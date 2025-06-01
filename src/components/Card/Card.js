import styles from './Card.module.scss';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite } from '../../redux/store';
import clsx from 'clsx';

const Card = ({ id, title, isFavorite }) => {
  const dispatch = useDispatch();

  const handleToggleFavorite = () => {
    dispatch(toggleCardFavorite(id));
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
    </li>
  );
};

export default Card;
