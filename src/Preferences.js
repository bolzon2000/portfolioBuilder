import React from 'react';
import { Switch, Button } from 'antd';
import NavBar from './components/NavBar';

import './Preferences.css';

function onChange(checked) {
  console.log(`switch to ${checked}`);
}

class Preferences extends React.Component {



  render() {
    return (
      <div className='preferencesLayout'>
        <NavBar headerText="Portfolio Builder"/>
        <h2>Account Information</h2>
        <div className='preferencesRow'>
          <span>Email Address</span>
          <a href=''>Edit</a>
        </div>
        <div className='preferencesRow'>
          <span>Phone Number</span>
          <a href=''>Edit</a>
        </div>
        <div className='preferencesRow'>
          <span>Password</span>
          <a href=''>Edit</a>
        </div>
        <h2 className='paddingTop20px'>Notifications</h2>
        <div className='preferencesRow'>
          <span>Receive Email Notifications</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <div className='preferencesRow'>
          <span>Receive Text Notifications</span>
          <Switch defaultChecked onChange={onChange} />
        </div>
        <h2 className='paddingTop20px'>Actions</h2>
        <div >
          <Button type='primary'>Clear Portfolio</Button>
        </div>
      </div>
    )
  }

} export default Preferences;
