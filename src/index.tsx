import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';
import { QueryClient, QueryClientProvider } from 'react-query'
import App from "./app/App";
import {BrowserRouter} from "react-router-dom";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </React.StrictMode>
    </BrowserRouter>,
);
