import React from "react";
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { AuthTheme } from './resources/AuthTheme';
import DividendStatusCard from './components/DividendStatusCard';
import BarChart from './components/BarChart';
import NavBar from './components/NavBar';

import './Home.css';

Amplify.configure (config);

class Home extends React.Component {


  render() {

    return (

      <div>
        <NavBar headerText="Portfolio Builder"/>
        <div className='homeLayout'>
          <h2>Dividend Information</h2>
          <div>
            <DividendStatusCard
              title='Next Dividend'
              symbol='VZ'
              payment='$243'
              dateLabel="Jan 22"
            />
            <DividendStatusCard
              title='Dividends Paid this Quarter'
              symbol=''
              payment='$449'
              dateLabel="Q1, 2019"
            />
            <DividendStatusCard
              title='Dividends Paid YTD'
              symbol=''
              payment='$643'
              dateLabel="2019"
            />
            <DividendStatusCard
              title='Projected Income this Year'
              symbol=''
              payment='$20,000'
              dateLabel="2019"
            />
            <h2>Monthly Income</h2>
            <BarChart />
          </div>
        </div>
      </div>
    );
  }
} export default withAuthenticator(Home, {
  // Render a sign out button once logged in
  includeGreetings: false,
  // Show only certain components
  authenticatorComponents: [],
  theme: AuthTheme
});
