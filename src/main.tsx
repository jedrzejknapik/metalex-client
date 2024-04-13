import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from '@providers/auth/auth-provider.tsx';
import { ToastProvider } from '@providers/toasts/toasts-provider.tsx';
import { LangProvider } from '@providers/lang/lang-provider.tsx';
import { ReactQueryProvider } from '@providers/react-query/react-query-provider.tsx';

import { App } from './App.tsx';

import 'normalize.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './styles/_theme.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReactQueryProvider>
      <BrowserRouter>
        <LangProvider>
          <ToastProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </ToastProvider>
        </LangProvider>
      </BrowserRouter>
    </ReactQueryProvider>
  </React.StrictMode>,
);
