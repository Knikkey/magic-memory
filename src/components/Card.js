import styles from "./Card.module.css";

export default function Card({ card, handleChoice, flipped, disabled }) {
  const handleFlip = () => {
    if (!disabled) handleChoice(card);
  };

  return (
    <div className={styles.card}>
      <div className={flipped ? styles.flipped : ""}>
        <img src={card.src} alt="card front" className={styles.front} />
        <img
          src="../img/cover.png"
          alt="card back"
          className={styles.back}
          onClick={handleFlip}
        />
      </div>
    </div>
  );
}
