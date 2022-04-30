import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
// import { ApolloProvider } from '@apollo/client';
//  import { setContext } from '@apollo/client/link/context';
import  ApolloClient  from 'apollo-boost';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';


const client = new ApolloClient({
  

  request: operation => {
    const token = localStorage.getItem('id_token');

      operation.setContext({
        headers: {
          authorizarion: token ? `Bearer ${token}` : ''
        }

      })
  },
  uri: '/graphql'

});

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

function App() {
  return (
    
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Switch>
              <Route exact path='/' component={SearchBooks} />

              <Route exact path='/saved' component={SavedBooks} />

              <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />

          </Switch>
        </>
      </Router>
    </ApolloProvider>

  );
}

export default App;
