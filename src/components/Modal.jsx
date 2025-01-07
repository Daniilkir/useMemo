import style from "./Modal.module.css"
function Modal({modalVisibility}){
    const closeModal = ()=>{
        modalVisibility(false)
    }

    return(
        <div className={style.backdrop}>
            <div className={style.modalContent}>
                <h2>Купівля</h2>
                <button onClick={closeModal}>Закрити модальне вікно </button>
            </div>
        </div>
    )
}
export default Modal;