import React from 'react';
import styles from './CardFilter.module.css';
import { handleFilterBookmark } from '../../redux/features/cardSlice';
import { useDispatch } from 'react-redux';

function CardFilter() {
  const dispatch = useDispatch();
  return (
    <div className={styles.cardfilter}>
      <button onClick={() => dispatch(handleFilterBookmark())}>
        избранное
      </button>
    </div>
  );
}

export default CardFilter;
