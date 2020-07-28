import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./style/scss/index.scss";
import * as serviceWorker from './serviceWorker';
import Layout from "./layout";
import { store } from "./store";
import ReduxToastr from "react-redux-toastr";


ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Layout/>
          </BrowserRouter>
          <div>
              <ReduxToastr
                  preventDuplicates
                  getState={(state) => state.toastr} // This is the default
                  transitionIn="fadeIn"
                  transitionOut="fadeOut"
                  progressBar
                  closeOnToastrClick/>
          </div>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
