import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Preferences from './Preferences';
import Portfolio from './Portfolio';
import EditPortfolio from './EditPortfolio';
import Welcome from './Welcome';
import Error_404 from './Error_404';
import Notifications from './Notifications';
import Tips from './Tips';

const Router = (props) => {

    return (
      //<router>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route path='/Welcome' component={Welcome} />
          <Route path='/Portfolio' component={Portfolio}/>
          <Route path='/EditPortfolio' component={EditPortfolio} />
          <Route exact path='/Home' component={Home}/>
          <Route path='/Preferences' component={Preferences}/>
          <Route path='/Notifications' component={Notifications}/>
          <Route path='/Tips' component={Tips}/>
          <Route component={Error_404} />
        </Switch>
      //</router>
    )
}




export default Router
