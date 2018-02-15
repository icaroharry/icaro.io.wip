import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';

import './Wakatime.css';

class Wakatime extends Component {
  data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [{
        label: 'Coding activity',
        data: [12, 19, 3, 5, 2, 3, 10],
        backgroundColor: [],
        borderColor: [],
        borderWidth: 1
      }]
  };

  async fetchCodingActivity() {
    const response = await fetch('https://wakatime.com/share/@icaroharry/48e2ddbb-ae1a-4505-802d-00e9d41b7059.json', {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    });

    return response.text();
  }

  async renderCodingActivity() {
    console.log(await this.fetchCodingActivity())
    // this.data.datasets[0].data = (await this.fetchCodingActivity()).json().data.map(day => day.grand_total.total_seconds / 60 * 60);
  }

  componentWillMount() {
    this.renderCodingActivity();
  }

  render() {
    return (
      <div>
        <h1> Week Stats </h1>
        <Bar data={this.data}></Bar>
      </div>
    );
  }
}

export default Wakatime;
