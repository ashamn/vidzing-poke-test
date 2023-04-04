import styles from "./modal.module.scss";
import { PropsWithChildren } from "react";

interface ModalProps {
  show: boolean;
  onOverlayClick?: Function;
}

export default function Modal(props: PropsWithChildren<ModalProps>) {
  return props.show ? (
    <div
      className={styles.modal_overlay}
      onClick={(e) => {
        e.stopPropagation();
        if (
          props.onOverlayClick &&
          typeof props.onOverlayClick === "function"
        ) {
          props.onOverlayClick();
        }
      }}
    >
      <div className={styles.modal_main} onClick={(e) => e.stopPropagation()}>
        {props.children}
      </div>
    </div>
  ) : null;
}
