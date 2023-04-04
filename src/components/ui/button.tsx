import styles from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

function Button(props: ButtonProps) {
  const { children, onClick } = props;

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button className={styles.button} onClick={onButtonClick}>
      {children}
    </button>
  );
}

export default Button;
