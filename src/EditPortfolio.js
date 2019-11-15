import React from 'react';
import Amplify from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import { AuthTheme } from './resources/AuthTheme';
import NavBar from './components/NavBar';
import PortfolioList from './components/PortfolioList';
import AddStockList from './components/AddStockList';
import { Button } from 'antd';

import './Portfolio.css';

Amplify.configure(config);

//check to see if first time user
class EditPortfolio extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      visible: false,
      action : null,
      addStock: false,
      newPortfolio: false,
      introVisibility: 'hidden'
    }
  }

  navigate =  () => {
    this.props.history.push('/AddStocks')
  };

  addNew = () => {
    this.setState({addStock: true});
  };

  //persist selections
  saveStock = () => {
    this.setState({addStock: false});
  };

  recordCount = (count) => {
    console.log('what is my count:', count);
    if (count === 0) {
      this.setState({
        introVisibility: 'visible',
        newPortfolio: true
    });

    }
  };

  headingBlock() {
    return (
      <div>
        <NavBar headerText="Portfolio Builder"/>
        <div className='portfolioHeading'>
          <h2>Edit Portfolio</h2>
          {(this.state.addStock) ?
              <Button type='primary' onClick = {() => this.saveStock()}>Done</Button> :
              <Button type='primary' onClick = {() => this.addNew()}>Add Stock</Button>
          }
        </div>
      </div>
    )
  }

  render() {

      return (
        <div className="portfolioLayout">
        {(this.state.newPortfolio) ? null : this.headingBlock()}
          <div>
            {(this.state.addStock) ? <AddStockList /> : <PortfolioList callbackFromParent={this.recordCount} /> }
          </div>

          <div style={{visibility: this.state.introVisibility}}>
            <div class='heading'>
              <h2>Build Your Portfolio</h2>
            </div>
            <p>Welcome to Portfolio Builder. To get started you can either build a portfolio from scratch
            or auto-generate a portfolio. We suggest that you auto-generate a portfolio that will be optimized
            for safety. The choice is yours!
            </p>
            <div>
              <span style={{paddingRight:5}}><Button onCick = {() => this.autoGenerate()}>Generate it for Me</Button></span>
              <span style={{paddingLeft:5}}><Button onCick = {() => this.autoGenerate()}>Build it from Scratch</Button></span>
            </div>
          </div>
        </div>
      )

    }


}
export default withAuthenticator(EditPortfolio, {
  // Render a sign out button once logged in
  includeGreetings: false,
  // Show only certain components
  authenticatorComponents: [],
  theme: AuthTheme
});
