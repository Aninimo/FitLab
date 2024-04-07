import { ApolloProvider } from '@apollo/client';
import { Provider } from 'react-redux';

import client from './services';
import store from './store';
import { Routes } from './routes';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes/>
      </Provider>
    </ApolloProvider>
  );
}
