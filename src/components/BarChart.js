import React from 'react';
import { Chart, Bar as MonthlyChart} from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.plugins.unregister(ChartDataLabels);

const data = {

    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct","Nov", "Dec"],
    datasets: [{
      label: "Monthly Income",
      backgroundColor: "#00800080",
      data: [ 206, 159, 380, 81, 516, 55, 340, 232, 142, 454, 465, 223],
      datalabels: {
        color: '#393f4d',
        anchor: 'end',
        align: 'end',
        font: { size: 12, family:"helvetica"}
      },
    }]
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

class BarChart extends React.Component {
  render() {
    return (
      <div>
        <MonthlyChart data={data} plugins={ChartDataLabels} options={options} />
      </div>
    );
  }
}

export default BarChart;
