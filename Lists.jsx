import React, { Component } from "react";
import { newsData } from "./data/newsData";

export default class Lists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      news: newsData,
    };
  }
  render() {
    const { news } = this.state;
    return this.state.news.map((n) => {
      return (
        <article className="news-card">
          <div className="news-header">
            <img className="imgBg" src={n.headerBgSrc} alt={n.title} />

            <div className="header-content">
              <h2 className="title">{n.title}</h2>

              <div className="actions">
                <button className="btn-actions">
                  <i className="fa-solid fa-heart"></i>
                </button>
                <button className="btn-actions">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="news-body">
            <span className="category">{n.category}</span>
            <p>{n.body}</p>
            <span className="date">{n.date}</span>
          </div>
        </article>
      );
    });
  }
}
