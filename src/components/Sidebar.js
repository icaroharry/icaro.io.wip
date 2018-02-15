import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

import avatar from '../assets/avatar.jpg';

import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div>
        <Image className="avatar" src={avatar} circle />
        <h1> Ícaro Harry </h1>
        <p>
          Full stack developer and blockchain enthusiast  
        </p>
      </div>
    );
  }
}

export default Sidebar;
