import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./providers/ThemeProvider.jsx";
import Layout from "./general-components/LayoutTheme/Layout.jsx";
import {UserAuthContextProvider} from "./providers/AuthProvider";
import {store} from "./redux-store/store.js";
import {Provider} from "react-redux";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
          <UserAuthContextProvider>
              <ThemeProvider>
                  <Layout>
                      <BrowserRouter>
                          <Router />
                      </BrowserRouter>
                  </Layout>
              </ThemeProvider>
          </UserAuthContextProvider>
      </Provider>
  </React.StrictMode>,
)
