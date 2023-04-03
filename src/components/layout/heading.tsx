import Image from "next/image";
import styles from "./heading.module.scss";

export default function Heading() {
  return (
    <div className={styles.heading}>
      <div className={styles.logo}>
        <div className={styles.logo__wrapper}>
          <Image
            src="/pokemons.png"
            alt="Pokemon Logo"
            width={500}
            height={204}
          />
        </div>
        <h1>Pokemon Team Builder</h1>
      </div>
    </div>
  );
}
