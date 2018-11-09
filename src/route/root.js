import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
import App from '../components/App';
import BaseInfoView from '../components/BaseInfo';

const Root = ({ stores }) => (
    <Provider {...stores}>
      <Router>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/baseinfo" component={BaseInfoView} />
        </div>
      </Router>
    </Provider>
  );

export default Root;