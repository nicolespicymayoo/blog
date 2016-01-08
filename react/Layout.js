import './Layout.css';
import React, {Component} from 'react';
import Navbar from './views/Navbar/index.js';

export default class Layout extends Component {
  render() {
    return (
      <div className="layout">
      	<Navbar />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}