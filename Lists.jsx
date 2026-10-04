import React, { Component } from "react";
import { newsData } from "./data/newsData";
import styles from "./Lists.module.css";
import classNames from "classnames";
import NewsListItem from "./NewsListItem";

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

  deleteItems = (id, e) => {
    e.stopPropagation();
    const { news } = this.state;
    const updatedNews = news.filter((n) => n.id !== id);
    this.setState({ news: updatedNews });
  };

  render() {
    const { news } = this.state;

    return news.map((n) => {
      return (
        <NewsListItem
          key={n.id}
          n={n}
          toggleSelect={this.toggleSelect}
          deleteItems={this.deleteItems}
        />
      );
    });
  }
}
