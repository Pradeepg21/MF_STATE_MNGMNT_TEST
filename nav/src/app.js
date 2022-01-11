import React from "react";
import ReactDOM from "react-dom";
import Headers from "./Headers";
import Page from "./Page";
import "./index.css";

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <h6 >This is a react remote app used in another Host also</h6>
        <div>Name: nav is changing</div>
        <Headers></Headers>
        <Page></Page>
      </div>
    )
  }
}

class NavElement extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<App/>, this);
  }
}

customElements.define('nav-element', NavElement);