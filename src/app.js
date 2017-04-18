/**
 * app.js
 *
 * this is the entry file for the application, only setup and boilerplate code
 *
 */
// Needed for redux-saga es6 generator support
import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { ThemeProvider } from 'styled-components';
import auth from 'utils/auth';

// import sanitize css
// import 'sanitize.css/sanitize.css';
// import 'react-redux-toastr/src/styles/index.scss';

import configureStore from './config.redux/store';
import ReduxToastr from './lib/react-redux-toastr';
import { makeSelectLocationState } from './config.redux/selectors';
import { createRoutes } from './config.routes/routes';
import PPTheme from './theme';

export const historyObj = browserHistory;
// Needed for material-ui libarry
injectTapEventPlugin();
// create redux store with history
const initialState = {};
const store = configureStore(initialState, historyObj);
// sync history and store, as the react-router-redux reducer
const history = syncHistoryWithStore(historyObj, store, {
  selectLocationState: makeSelectLocationState(),
});

const rootRoute = createRoutes(store, auth);

ReactDOM.render(
  <MuiThemeProvider>
    <ThemeProvider theme={PPTheme}>
      <Provider store={store}>
        <div>
          <Router
            history={history}
            routes={rootRoute}
            render={
                // Scroll to top when going to new page, imitating default browser behavior
                applyRouterMiddleware(useScroll())
            }
          />
          <ReduxToastr />
        </div>
      </Provider>
    </ThemeProvider>
  </MuiThemeProvider>, document.getElementById('app')
);
