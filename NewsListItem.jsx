import { newsData } from "./data/newsData";
import styles from "./Lists.module.css";
import classNames from "classnames";

import React from "react";

function NewsListItem(props) {
  const { toggleSelect, deleteItems, n } = props;

  const togglenewsCard = classNames(styles.newsCard, {
    [styles.newsCardActive]: n.isSelected,
  });
  return (
    <article onClick={() => toggleSelect(n.id)} className={togglenewsCard}>
      <div className={styles.newsHeader}>
        <img className={styles.imgBg} src={n.headerBgSrc} alt={n.title} />

        <div className={styles.headerContent}>
          <h2 className={styles.title}>{n.title}</h2>

          <div className={styles.actions}>
            <button className={styles.btnActions}>
              <i className="fa-solid fa-heart"></i>
            </button>
            <button
              onClick={(e) => deleteItems(n.id, e)}
              className={styles.btnActions}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>

      <div className={styles.newsBody}>
        <span className={styles.category}>{n.category}</span>
        <p>{n.body}</p>
        <span className={styles.date}>{n.date}</span>
      </div>
    </article>
  );
}

export default NewsListItem;
