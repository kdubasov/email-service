import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./providers/ThemeProvider.jsx";
import Layout from "./general-components/LayoutTheme/Layout.jsx";
import {Provider} from "react-redux";
import {store} from "./redux-store/store.js";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
        <Layout>
            <BrowserRouter>
                <Provider store={store}>
                    <Router />
                </Provider>
            </BrowserRouter>
        </Layout>
      </ThemeProvider>
  </React.StrictMode>,
)
