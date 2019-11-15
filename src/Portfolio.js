import React from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { AuthTheme } from './resources/AuthTheme';
import LineChart from './components/LineChart';
import { Table, Button } from 'antd';
import NavBar from './components/NavBar';

import './Portfolio.css';

Amplify.configure(config);

const data = [
  {
    key: '1',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
  {
    key: '2',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
  {
    key: '3',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
  {
    key: '4',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
  {
    key: '5',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
  {
    key: '6',
    ticker: 'GOOG',
    value: '200,000',
    yield: '8.2%',
    payout: '729,908'
  },
];

const columns = [
  {
    title: 'Ticker',
    dataIndex: 'ticker',
    key: 'ticker',
  },
  {
    title: 'Value',
    dataIndex: 'value',
    key: 'value',
    align: 'center'
  },
  {
    title: 'Yield',
    dataIndex: 'yield',
    key: 'yield',
    align: 'center'
  },
  {
    title: 'Yearly Payout',
    dataIndex: 'payout',
    key: 'payout',
    align: 'center'
  },
];


class Portfolio extends React.Component {

  navigate =  () => {
    this.props.history.push('/EditPortfolio')
  };

  render() {

    return (

      <div>
        <NavBar headerText="Portfolio Builder"/>
        <div className='portfolioLayout'>
          <div class='portfolioHeading'>
            <h2>Price Performance</h2>
            <Button type='primary' onClick = {() => this.navigate()}>Edit</Button>
          </div>
          <LineChart />
          <h2>Portfolio</h2>
          <Table columns={columns} dataSource={data} size={'small'}  />
        </div>
      </div>
    )
  }

} export default withAuthenticator(Portfolio, {
  // Render a sign out button once logged in
  includeGreetings: false,
  // Show only certain components
  authenticatorComponents: [],
  theme: AuthTheme
});
