import React, { Component } from "react";
import { newsData } from "./data/newsData";
import styles from "./Lists.module.css";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: newsData,
    };
  }

  toggleSelect = (id) => {
    const { news } = this.state;
    const updatedNews = news.map((n) => {
      if (n.id === id) {
        return { ...n, isSelected: !n.isSelected };
      }
      return n;
    });

    this.setState({ news: updatedNews });
  };

  render() {
    const { news } = this.state;

    return news.map((n) => {
      const togglenewsCard = `${styles.newsCard} ${n.isSelected ? styles.newsCardActive : ""}`;

      return (
        <article
          key={n.id}
          onClick={() => this.toggleSelect(n.id)}
          className={togglenewsCard}
        >
          <div className={styles.newsHeader}>
            <img className={styles.imgBg} src={n.headerBgSrc} alt={n.title} />

            <div className={styles.headerContent}>
              <h2 className={styles.title}>{n.title}</h2>

              <div className={styles.actions}>
                <button className={styles.btnActions}>
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className={styles.btnActions}>
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
    });
  }
}
