import React from 'react';
import { Table, Divider } from 'antd';
import NavBar from './components/NavBar';

import './Notifications.css';

const { Column } = Table;

const data = [
  {
    key: '1',
    date: '1/20/2019',
    message: 'this is some fantastic message',
    action: 'delete'
  },
  {
    key: '2',
    date: '1/20/2019',
    message: 'this is some fantastic message',
    action: 'delete'
  },
  {
    key: '3',
    date: '1/20/2019',
    message: 'this is some fantastic message',
    action: 'delete'
  },
];

class Notifications extends React.Component {

  render() {
    return (
      <div class="notificationLayout">
        <NavBar headerText="Portfolio Builder"/>
        <h2>Notifications</h2>
        <Table size='small' dataSource={data}>
          <Column title="Date" dataIndex="date" key="date" />
          <Column title="Message" dataIndex="message" key="message" />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <span>
                <a>Delete</a>
              </span>
            )}
          />
        </Table>
      </div>
    );
  }

} export default Notifications;
