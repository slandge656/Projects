import styles from "./UserInput.module.css"

const UserInput =({userInput}) =>{
    return <input type="text" className={styles.input} readOnly value={userInput}/>
}

export default UserInput;