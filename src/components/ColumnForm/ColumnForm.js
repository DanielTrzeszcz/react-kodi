import styles from './ColumnForm.module.scss';
import { useState } from 'react';
import Button from '../Button/Button';
const ColumnForm = props => {
    const [value, setValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        props.action({ title: value });
        setValue('');
    };

	return (
        <form onSubmit={handleSubmit}>
            <input type="text"  value={value} onChange={e => setValue(e.target.value)} />
            <Button>Add column</Button>
        </form>
	);
};

export default ColumnForm;

