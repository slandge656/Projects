import styles from "./ItemButtons.module.css";

const ItemButtons = ({ itembuttons,onClickInput }) => {
    return (
      <div className={styles.bContainer}>
        {itembuttons.map((btn, index) => (
          <button type="submit" className={`${styles.buttons} ${btn ==='=' && styles.primary} ${btn ==='DEL' && styles.danger}`} key={index} onClick={() => onClickInput(btn)}>
            {btn}
          </button>
        ))}
      </div>
    );
  };

export default ItemButtons;