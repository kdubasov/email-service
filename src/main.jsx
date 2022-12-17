import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./providers/ThemeProvider.jsx";
import Layout from "./general-components/LayoutTheme/Layout.jsx";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import {UserAuthContextProvider} from "./providers/AuthProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <UserAuthContextProvider>
          <ThemeProvider>
              <Layout>
                  <BrowserRouter>
                      <Router />
                  </BrowserRouter>
              </Layout>
          </ThemeProvider>
      </UserAuthContextProvider>
  </React.StrictMode>,
)
