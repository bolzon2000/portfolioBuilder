import React from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'Jul'],
  datasets: [
    {
      fill: true,
      lineTension: 0.1,
      backgroundColor: "#00800080",
      borderColor: 'green',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 10,
      data: [65.23, 67.56, 68.34, 69.20, 64.66, 65.38, 65.28]
    }
  ],
};

const options = {
    legend: {
        display: false
    },
    tooltips: {
        callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
    }
}

class LineChart extends React.Component{

  render() {
    return (
      <div>
        <Line data={data} options={options}/>
      </div>
    );
  }
};

export default LineChart;
