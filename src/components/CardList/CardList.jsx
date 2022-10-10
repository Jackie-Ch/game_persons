import React, { useState, useEffect } from 'react';
import CardItem from '../CardItem/CardItem';
import styles from './CardList.module.css';

function CardList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://amiiboapi.com/api/amiibo/')
      .then((response) => {
        return response.json();
      })
      .then((json) => setData(Object.values(json)));
  }, []);

  const handleDelete = (id) => {
    const filteredCard = data.map((cards) =>
      cards.filter((card) => card.tail !== id)
    );
    setData(filteredCard);
  };

  const handleBookmark = (id) => {
    setData(
      data.map((cards) =>
        cards.map((card) => {
          if (card.tail === id) {
            return { ...card, bookmark: !card.bookmark };
          }
          return card;
        })
      )
    );
  };

  return (
    <div className={styles.container}>
      {data.map((arr) =>
        arr.map((obj) => (
          <CardItem
            {...obj}
            key={obj.tail}
            onDelete={handleDelete}
            onBookmark={handleBookmark}
          />
        ))
      )}
    </div>
  );
}

export default CardList;
