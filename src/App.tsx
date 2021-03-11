import React from 'react';
import { Body, Header, MovieCards } from './AppStyle';
import { MovieCard } from './Components/MovieCard/MovieCard';

const App = () => {
  return (
    <React.Fragment>
      <Header>
        <h1 className="ml2">What's On?</h1>
      </Header>
      <Body>
        <h2>Browse through our list of films showing at the cinema right now!</h2>
        <MovieCards className="mt3">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </MovieCards>

      </Body>

    </React.Fragment>


  );
}

export default App;
