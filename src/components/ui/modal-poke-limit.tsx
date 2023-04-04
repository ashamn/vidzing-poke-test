import styles from "./modal.module.scss";

import Modal from "../shared/modal";
import Button from "./button";
interface ModalPokeLimit {
  show: boolean;
  onOverlayClick: Function;
  onButtonClick: () => {};
}

export default function ModalPokeLimit(props: ModalPokeLimit) {
  const { show, onOverlayClick, onButtonClick } = props;
  return (
    <>
      <Modal show={show} onOverlayClick={onOverlayClick}>
        <div className={styles.main}>
          <div className={styles.main__text}>Your team if full</div>
          <Button onClick={onButtonClick}>Ok</Button>
        </div>
      </Modal>
    </>
  );
}
