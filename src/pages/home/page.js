import React from "react";
import { browserHistory } from "react-router";
import styles from "./styles.css";

export default class Home extends React.Component {

  about() {
    browserHistory.push("/about");
  }

  render() {
    return (
      <div className={styles.content}>
        <h1 className={styles.headingOne}>Hello world</h1>
        <p>Welcome to React Starter.</p>
        <button onClick={this.about}>About</button>
      </div>
    );
  }
}
