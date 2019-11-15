import React from 'react';
import BuySellModalContent from "./BuySellModalContent";
import { Table, Tag, Modal, Button } from 'antd';

var data = [
  {
    key: '1',
    ticker: 'APPL',
    tags: ['low'],
    shares: 320,
    yield: '8.2%',
  },
  {
    key: '2',
    ticker: 'GOOG',
    tags: ['med'],
    shares: 32,
    yield: '8.2%',
  },
  {
    key: '3',
    ticker: 'F',
    tags: ['high'],
    shares: 232,
    yield: '8.2%',
  },
  {
    key: '4',
    ticker: 'OSU',
    tags: ['low'],
    shares: 17,
    yield: '8.2%',
  },
];

//data = "";



class PortfolioList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      loading: false,
      visible: false,
      action : null,
    }
    this.props.callbackFromParent (data.length);
  }

  showModal = (text) => {
    this.setState({
      visible: true,
      record: text
    });
  };

  navigate =  () => {
    this.props.history.push('/EditPortfolio')
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };


  navigate =  () => {
    this.props.history.push('/AddStocks')
  };

  addNew = () => {
    return null;
  };

  onDateChange(date, dateString) {
    console.log(date, dateString);
  }

  render() {

    const columns = [
      {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
      },
      {
        title: 'Risk',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
          <span>
            {tags.map(tag => {
              let color = '#1d1e22';
              if (tag === 'high')
                color = 'red';

              return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
              );
            })}
          </span>
        ),
        align: 'center'
      },
      {
        title: 'Shares',
        dataIndex: 'shares',
        key: 'shares',
        align: 'center'
      },
      {
        title: 'Yield',
        dataIndex: 'yield',
        key: 'yield',
        align: 'center'
      },
      {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
          <span>
            <a onClick={() => this.showModal(text)}>Edit</a>
          </span>
        ),
        align: 'center'
      },
    ];

    if (data.length === 0) {
      return null;
    } else {
      return (
        <div>
          <Table columns={columns} dataSource={data} />
          <Modal
              visible={this.state.visible}
              title="Update Share Count"
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              footer={[
                <Button key="back" onClick={this.handleCancel}>
                  Return
                </Button>,
                <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk}>
                  Submit
                </Button>,
              ]}
            >
              <BuySellModalContent {...this.state.record} />
            </Modal>
        </div>
      )
    }
  }
}
export default PortfolioList;
