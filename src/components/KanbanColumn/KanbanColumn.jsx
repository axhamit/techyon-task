import React, { useState } from 'react';
import KanbanCard from '../KanbanCard/KanbanCard';
import styles from './KanbanColumn.module.scss';

const KanbanColumn = ({ title, cards, index }) => {
  const [showMore, setShowMore] = useState(false); 

  const handleViewClick = () => {
    if (cards.length === 0) {
      alert(`No cards available for the "${title}" column.`);
    } else {
      setShowMore(prevState => !prevState); 
    }
  };

  const displayCards = showMore ? cards : cards.slice(0, 3);

  return (
    <div className={styles.column}>
      <h3 className={`${styles.title} ${styles[`title-${index}`]}`}>{title}</h3>
      
      {/* Display cards */}
      <div className={styles.cards}>
        {displayCards.length === 0 ? (
          <p>No cards available</p> 
        ) : (
          displayCards.map((card, cardIndex) => (
            <KanbanCard key={cardIndex} {...card} />
          ))
        )}
      </div>

      {/* Always display the button */}
      <button className={styles.viewButton} onClick={handleViewClick}>
        {cards.length === 0
          ? 'No Cards Available'
          : showMore
          ? 'Show Less'
          : 'View More'}
      </button>
    </div>
  );
};

export default KanbanColumn;
