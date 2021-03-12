import React from 'react';
import { Body, Header } from './AppStyle';
import { Movies } from './Containers/Movies';

const App = () => {
  return (
    <React.Fragment>
      <Header>
        <h1 className="ml2">What's On?</h1>
      </Header>
      <Body>
        <Movies />
      </Body>
    </React.Fragment>
  );
}

export default App;
