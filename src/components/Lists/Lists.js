import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './Lists.module.scss';
import { getAllLists } from '../../redux/selectors';
import { addList } from '../../redux/actions';
import ListForm from '../ListForm/ListForm'; 

const Lists = () => {
  const lists = useSelector(getAllLists);
  const dispatch = useDispatch();

  const handleAddList = (newListData) => {
    const newId = lists.length > 0 ? Math.max(...lists.map(l => l.id)) + 1 : 1;
    dispatch(addList({
      id: newId,
      title: newListData.title,
      description: newListData.description,
    }));
  };

  return (
    <section className={styles.lists}>
      <h2 className={styles.heading}>Browse lists</h2>

      {}
      {lists.map(list => (
        <Link key={list.id} to={`/list/${list.id}`} className={styles.listLink}>
          <h3>{list.title}</h3>
          <p>{list.description}</p>
        </Link>
      ))}

      {}
      <ListForm action={handleAddList} />
    </section>
  );
};

export default Lists;
