import { useState } from 'react';
import styles from './ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

const ListForm = ({ action }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (title.trim()) {
      action({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.listForm}>
      <TextInput
        placeholder="List title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <TextInput
        placeholder="List description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <Button>Add list</Button>
    </form>
  );
};

export default ListForm;
