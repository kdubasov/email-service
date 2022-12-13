import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from "./Router.jsx";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./providers/ThemeProvider.jsx";

//css
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/index.css";
import Layout from "./general-components/LayoutTheme/Layout.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider>
        <Layout>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </Layout>
      </ThemeProvider>
  </React.StrictMode>,
)
