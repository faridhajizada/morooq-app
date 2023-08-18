import React from "react";
import Button from "./../Button/Button";
import P from "./../P/P";
import styles from "./CardItem.module.scss";

interface CardItemProps {
  title: string;
  text: string;
}
function CardItem({ title, text }: CardItemProps): JSX.Element {
  return (
    <div className={`${styles.card} ${styles.cardBorderRadius}`}>
      <div className={styles.cardBody}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <P appearance="grey">{text}</P>
        <Button appearance="red">Go somewhere</Button>
      </div>
    </div>
  );
}

export default CardItem;
