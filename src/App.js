import React, { Component } from 'react';
import { Grid, Row, Col, Navbar } from 'react-bootstrap';

import './App.css';

import Sidebar from './components/Sidebar';
import Github from './components/Github';
import Wakatime from './components/Wakatime';

class App extends Component {
  render() {
    return (
      <div>
        <style>
        @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
        </style>
        <Navbar className="Navbar"></Navbar>
        
        <Grid className="Grid">
          <Row className="Row">
            <Col className="Col first" xs={12} md={2} lg={2}>
              <Sidebar></Sidebar>
            </Col>
            <Col className="Col" xs={12} md={5} lg={5}>
              <Github></Github>
            </Col>
            <Col className="Col" xs={12} md={5} lg={5}>
             <Wakatime></Wakatime>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
