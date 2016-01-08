import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  render() {
    return(
       <div className="header">
        <div className="header-photo"></div>
        <div className="header-title-container">
          <div className="header-title">Let your content be heard.</div>
          <div className="header-subtitle">This is the descriptive subtitle that is witty and short.</div>
        </div>
      </div>
    )
  }
}