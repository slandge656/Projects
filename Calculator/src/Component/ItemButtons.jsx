import styles from "./ItemButtons.module.css";

const ItemButtons = ({ itembuttons,onClickInput }) => {
    return (
      <>
        {itembuttons.map((btn, index) => (
          <button type="submit" className={`${['C', '+', '-','DEL','/','*','%','.','='].includes(btn) ? styles.icons : styles.buttons}`} key={index} onClick={() => onClickInput(btn)}>
            {btn}
          </button>
        ))}
      </>
    );
  };

export default ItemButtons;