import styles from "./button.module.scss";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  classes?: string;
}

function Button(props: ButtonProps) {
  const { classes, children, onClick } = props;

  const onButtonClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`${styles.button} ${classes ? styles[classes] : ""}`}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
}

export default Button;
