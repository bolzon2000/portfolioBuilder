import React from "react";
import { Link } from 'react-router-dom';
import { Icon } from 'antd';

import './Error_404.css';

class Error_404 extends React.Component {

  render() {
    return (
      <div class='displayData'>
        <div class='headingText'>Page Not Found!</div>
        <Icon type="fall" style={{ fontSize: '200px', color: 'red', border: '1px solid red', height:'200px',width:'200px', margin:'10px'}} theme="outlined" />
        <Link class='link' to='/'>Go Home</Link>
      </div>
    );
  }
} export default Error_404
