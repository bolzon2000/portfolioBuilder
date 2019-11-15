import React from "react";
import { Button } from 'antd';

import './Welcome.css';

class Welcome extends React.Component {

  navigate =  () => {
    this.props.history.push('/Home')
  };

  render() {
    return (
      <div className ='standardLayout'>
        <div className ='welcomdLayout'>
          <div>
            <span className ='appTitle'>PORTFOLIO BUILDER </span>
            <span className ='bodyText'>CREATE AN OPTIMIZED DIVIDEND PORTFOLIO IN MINUTES!</span>
          </div>
          <Button onClick = {() => this.navigate()}>Get Started</Button>
        </div>
      </div>
    );
  }
}
export default Welcome
