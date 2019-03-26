import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import IndexPage from './containers/IndexPage';
import SeriesIndexPage from './containers/SeriesIndexPage';
import SeriesMoviePage from './containers/SeriesMoviePage';
import MoviePage from './containers/MoviePage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.MOVIE} component={MoviePage} />
      <Route path={routes.SERIE} component={SeriesMoviePage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.INDEX} component={IndexPage} />
      <Route path={routes.SERIES} component={SeriesIndexPage} />
  
    </Switch>
  </App>
);
