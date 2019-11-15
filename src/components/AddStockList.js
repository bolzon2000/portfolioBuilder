import React from 'react';
import { Table, Tag} from 'antd';

const data = [
  {
    key: '1',
    ticker: 'GOOG',
    tags: ['low'],
    yield: '5.2%',
    industry: 'Tech'
  },
  {
    key: '2',
    ticker: 'F',
    tags: ['high'],
    yield: '5.2%',
    industry: 'Finacial'
  },
  {
    key: '3',
    ticker: 'APK',
    tags: ['low'],
    yield: '6.20%',
    industry: 'Finacial'
  },
  {
    key: '4',
    ticker: 'APPL',
    tags: ['med'],
    yield: '1.2%',
    industry: 'Consumer Goods'
  },
];

class AddStockList extends React.Component {

  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };


  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: 'Ticker',
        dataIndex: 'ticker',
        key: 'ticker',
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
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
        title: 'Yield',
        dataIndex: 'yield',
        key: 'yield',
        sorter: (a, b) => a.yield.length - b.yield.length,
        sortOrder: sortedInfo.columnKey === 'yield' && sortedInfo.order,
        align: 'center'
      },
      {
        title: 'Industry',
        dataIndex: 'industry',
        key: 'industry',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        align: 'center'
      },
    ];

    // rowSelection object indicates the need for row selection
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
      }),
    };

    return (
      <div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={data} onChange={this.handleChange} />
      </div>
    );
  }
}
export default AddStockList;
