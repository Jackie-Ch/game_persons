import React from 'react';
import styles from './CardItem.module.css';
import { handleBookmark, handleDelete } from '../../redux/features/cardSlice';
import { useDispatch, useSelector } from 'react-redux';

function CardItem() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.cardIt);
  console.log('RENDER');
  return (
    <>
      {data.map((card) => (
        <div className={styles.cardItem}>
          <img className={styles.cardImage} src={card.image} alt="img" />
          <div>name: {card.name}</div>
          <div>type: {card.type}</div>

          <div className={styles.footer}>
            <div className={styles.like}>
              <i
                onClick={() => dispatch(handleBookmark(card.tail))}
                className={`bi bi-heart${card.bookmark ? '-fill' : ''}`}
              ></i>
            </div>

            <button onClick={() => dispatch(handleDelete(card.tail))}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default CardItem;
