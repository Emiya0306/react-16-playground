import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import './index.css';
import SetState from './views/SetState';
import SetContext from './views/SetContext';
import SetTimeout from './views/SetTimeout';
import PageMemo from "./views/PageMemo";
import SetComplexState from "./views/SetComplexState";

ReactDOM.render(
  <div className="app">
    <BrowserRouter>
      <nav>
        <Link to="/set-timeout">SetTimeout</Link>
        <Link to="/set-state">SetState</Link>
        <Link to="/set-complex-state">SetComplexState</Link>
        <Link to="/memo">Memo</Link>
        <Link to="/set-context">SetContext</Link>
      </nav>
      <Switch>
        <Route path="/set-timeout" component={() => <SetTimeout />} />
        <Route path="/set-state" component={() => <SetState />} />
        <Route path="/set-complex-state" component={() => <SetComplexState />} />
        <Route path="/memo" component={() => <PageMemo />} />
        <Route path="/set-context" component={() => <SetContext />} />
      </Switch>
    </BrowserRouter>
  </div>,
  document.getElementById('root') as HTMLElement
);
