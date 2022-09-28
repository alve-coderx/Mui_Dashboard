import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'dev-iym9rag6.us.auth0.com'
const cliid = '2GsI04c3gI7svcHEwoCMqsvujPtc4iNh'
const redirect = window.location.origin + '/dashboards/devices'
ReactDOM.render(
  <Auth0Provider domain={domain} clientId={cliid} redirectUri={redirect}>
    <HelmetProvider>
      <SidebarProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </SidebarProvider>
    </HelmetProvider>
  </Auth0Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
