import React from "react";
import { browserHistory } from "react-router";
import styles from "./styles.css";

export default class About extends React.Component {

  home() {
    browserHistory.push("/");
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.headingOne}>About</h1>
        <p>Learn more about us</p>
        <button onClick={this.home}>Return to home</button>
      </div>
    );
  }
}
