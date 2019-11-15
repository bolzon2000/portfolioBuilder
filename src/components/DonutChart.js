import React from 'react';
import {Chart, Doughnut} from 'react-chartjs-2';

// some of this code is a variation on https://jsfiddle.net/cmyker/u6rr5moq/
var originalDonutDraw = Chart.controllers.doughnut.prototype.draw;
Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
  draw: function() {
    originalDonutDraw.apply(this, arguments);

    var chart = this.chart.chart;
    var ctx = chart.ctx;
    var width = chart.width;
    var height = chart.height;

    var fontSize = (height / 114).toFixed(2);
    ctx.font = fontSize + "em Verdana";
    ctx.textBaseline = "middle";

    var text = chart.config.data.text,
        textX = Math.round((width - ctx.measureText(text).width) / 2),
        textY = height / 2;

    ctx.fillText(text, textX, textY);
  }
});
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

const data = {
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#cccccc',
		'green',
		'green'
		],
	}],
  text: '23%',
};

const donutOptions = {
  responsive: true,
  cutoutPercentage: 70,
  maintainAspectRatio: true,
  marginRight:-10
};

const styles = {
  donutBox: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'none',
    justifyContent: 'space-between',
    alignItems: 'top',
    width:300,
    height:100,
    border:"1px solid #CCCCCC",
    padding:10
  },
  textBlock: {
    display: 'flex',
    flexDirection:'column',
  },
  textTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#393f4d',
    minWidth:150
  },
  textDate: {
    fontSize: 12,
    fontFamily: 'Verdana',
    color: '#393f4d',
    paddingTop: 2
  },
  textPayments: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Verdana',
    color: '#1d1e22',
    paddingTop: 10
  }

}

class DonutChart extends React.Component {

  render() {
    return (
      <div style={styles.donutBox}>
        <div style={styles.textBlock}>
          <div style={styles.textTitle}>{this.props.title}</div>
          <div style={styles.textDate}>{this.props.dateRange}</div>
          <div style={styles.textPayments}>{this.props.dollarAmount}</div>
        </div>
        <Doughnut data={data} options={donutOptions} />
      </div>
    );
  }
} export default DonutChart;
