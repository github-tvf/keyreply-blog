import React, { useEffect, Suspense } from 'react';
import { Router, Route,Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { Switch } from 'react-router';
import { createBrowserHistory as createHistory } from 'history';
import { updateLocation } from 'store/location';
import MainLayout from 'layouts/PageLayout/PageLayout'
import Spinner from '../components/Spinner'
import { PrivateRoute } from '../privateRoute/privateRoute'
import history from 'lib/history';
const Home = React.lazy(() => import('routes/WebApp/Home'))
const Authentication = React.lazy(() => import('routes/Authentication'))
const News = React.lazy(() => import('routes/WebApp/News'))
const NewsDetail = React.lazy(() => import('routes/WebApp/NewsDetail'))
const AdminView = React.lazy(() => import('routes/Admin/Admin'))
const PostView = React.lazy(() => import('routes/Admin/Post'))

const App = ({ store }) => {
  useEffect(() => {

  }, []);

  return (
    <Provider store={store}>
      <Router
        history={history}
        onUpdate={() => {
          window.scrollTo(0, 0)
        }}>
        <Suspense fallback={<Spinner />}>
          <MainLayout>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
            <Switch>
              <Route exact path="/login" component={Authentication} />
            </Switch>
            <Switch>
              <Route exact path="/news" component={News} />
            </Switch>
            <Switch>
              <Route exact path="/news/detail" component={NewsDetail} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/admin" component={AdminView} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/admin/post" component={PostView} />
            </Switch>
          </MainLayout>
        </Suspense>
      </Router>
    </Provider>
  );
};

export default App;
