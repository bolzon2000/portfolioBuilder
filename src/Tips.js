import React from 'react';
import NavBar from './components/NavBar';

import './Tips.css';

class Tips extends React.Component {

  render() {
    return (
      <div class="tipsLayout">
        <NavBar headerText="Portfolio Builder"/>
        <h2>Portfolio Building Tips</h2>
        <div className="tip"><b>Tip #1</b> Minimum of <b>20</b> stocks</div>
        <div className="tip"><b>Tip #2</b> Stocks spread across at least <b>5</b> industries (i.e. Consumer Goods)</div>
        <div className="tip"><b>Tip #3</b> Majority of stocks with <b>low</b> dividend risk</div>
        <div className="tip"><b>Tip #4</b> <b>Equal</b> investement across all stocks</div>
      </div>
    );
  }

} export default Tips;
