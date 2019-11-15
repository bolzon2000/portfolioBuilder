import React from 'react';

import './DividendStatusCard.css';


class DividendStatusCard extends React.Component {
  render() {
    return (
      <div class='cardPadding'>
        <div className='cardContainer'>
            <div className='cardTitle'>{this.props.title}</div>
            <div className='titleContainer'>
              <div className='payment'>{this.props.payment}</div>
              <div className='payment'>{this.props.symbol}</div>
            </div>
          <div className='dateLabel'>{this.props.dateLabel}</div>
        </div>
      </div>
    )
  }
}
export default DividendStatusCard;
