import React, {Component} from "react";
import './Hello.css';

class Hello extends Component {
  render() {
    return (
      <div className="f1 tc">
        <h1>Hello</h1>
        <p>Welcome to React</p>
      </div>
    )
  }
}

export default Hello;

// .f1 font-size:3rem
// .tc text-align:center