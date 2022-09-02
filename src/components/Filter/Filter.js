import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter';

export default function Filter() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter.value);

  const onFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <>
      Find contacts by name
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={onFilter}
      />
    </>
  );
}
