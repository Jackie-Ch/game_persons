import React from 'react';
import styles from './CardItem.module.css';

function CardItem({ image, name, type, onDelete, onBookmark, bookmark, tail }) {
  return (
    <div className={styles.cardItem}>
      <img className={styles.cardImage} src={image} alt="img" />
      <div>name: {name}</div>
      <div>type: {type}</div>

      <div className={styles.footer}>
        <div className={styles.like}>
          <i
            onClick={() => onBookmark(tail)}
            className={`bi bi-heart${bookmark ? '-fill' : ''}`}
          ></i>
        </div>
        <div className={styles.btn}>
          <button onClick={() => onDelete(tail)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
