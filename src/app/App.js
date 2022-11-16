import React, { useEffect } from 'react';
import CardItem from '../app/components/CardItem/CardItem';
import styles from './App.module.css';
import CardFilter from './components/CardFilter/CardFilter';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCards } from './redux/features/cardSlice';

function App() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cardIt);

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  if (data.length === 0)
    return (
      <>
        <h3>Карточек нет</h3>
        <a href="/">
          <button>Назад</button>
        </a>
      </>
    );

  return (
    <>
      <CardFilter />
      <div className={styles.container}>
        <CardItem />
      </div>
    </>
  );
}

export default App;
