import React from 'react';
import styles from './Meme.module.css';

const Meme = ({ topText, imageUrl, bottomText }) => {
  return (
    <div className={styles.memeContainer}>
      <div className={styles.textTop}>{topText}</div>
      <img src={imageUrl} alt="Meme" className={styles.image} />
      <div className={styles.textBottom}>{bottomText}</div>
    </div>
  );
};

export default Meme;
