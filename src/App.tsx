import React from 'react';
import { Body, Header } from './AppStyle';

const App = () => {
  return (
    <React.Fragment>
      <Header>
        <h1 className="ml2">What's On?</h1>
      </Header>
      <Body>
        <h2>Browse through our list of films showing at the cinema right now!</h2>
      </Body>

    </React.Fragment>


  );
}

export default App;
