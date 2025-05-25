import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { addCard } from '../../redux/store';

const CardForm = ({ columnId }) => {
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
  addCard({
    id: Date.now(),
    title,
    columnId,
  })
);


    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput value={title} onChange={e => setTitle(e.target.value)} />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
