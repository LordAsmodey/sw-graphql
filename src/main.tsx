import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 1. import `NextUIProvider` component
import {NextUIProvider} from "@nextui-org/react";

import { InMemoryCache, ApolloClient, HttpLink, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <NextUIProvider>
        <main className="dark text-foreground bg-background h-dvh">
          <App/>
        </main>
      </NextUIProvider>
    </ApolloProvider>
  </React.StrictMode>
,
)
