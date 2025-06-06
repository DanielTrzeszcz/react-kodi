import styles from './SearchForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSearchString } from '../../redux/selectors';
import { updateSearchString } from '../../redux/actions';

const SearchForm = () => {
  const dispatch = useDispatch();
  const searchString = useSelector(getSearchString); 
  const [value, setValue] = useState(searchString); 

  useEffect(() => {
    setValue(searchString);
  }, [searchString]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearchString(value));
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm;
