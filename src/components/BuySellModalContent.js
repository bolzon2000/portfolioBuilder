import React from 'react';
import { InputNumber, Select, DatePicker } from 'antd';

const { Option } = Select;
const maxShareCount = 9000000;
const defaultStockAction = 'bought';


class BuySellModalContent extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      maxShareCount: maxShareCount,
      stockAction: defaultStockAction,
      defaultShareCount: 1,
    }
    //need to get the total shares avail for sell and put in as the max value
  }


  onSelectChanged = (value) => {
    this.setState({ stockAction: value })
  };

  render() {
    return (
      <div style={styles.content}>
        <p style={{ fontWeight: 'bold' }}>
          You currently have {this.props.shares} shares of {this.props.ticker}
        </p>
        <span>Did you buy or sell shares?</span>
        <Select defaultValue={this.state.defaultStockAction} style={{ width: 120 }} onChange={this.onSelectChanged}>
          <Option value="bought">Bought</Option>
          <Option value="sold">Sold</Option>
        </Select>
        <span>How many shares?</span>
        <InputNumber min={1} max={(this.state.stockAction === 'bought') ? maxShareCount : this.props.shares} defaultValue={1} style={{ width:120 }} />
        <span>When did you buy or sell?</span>
        <DatePicker onChange={this.onDateChange} style={{ width:120 }} />
      </div>
    )
  }

}
export default BuySellModalContent;

const styles = {
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'left',
  }
}
