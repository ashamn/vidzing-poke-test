import Main from "./main";
import Heading from "./heading";
import styles from "./layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layout}>
      <Heading />
      <Main />
    </div>
  );
}
