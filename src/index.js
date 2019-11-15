import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App';
import './resources/App.css';
import 'antd/dist/antd.css';

import './index.css';

//import Heading from './components/Heading';

render((

  <BrowserRouter>
    <div className='pageStyle'>
      <App />
    </div>
  </BrowserRouter>

), document.getElementById('root'));
