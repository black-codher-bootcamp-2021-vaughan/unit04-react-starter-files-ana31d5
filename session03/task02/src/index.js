import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './Profile';

function App() {
  return (
      <Profile name="Anastasia" bio="Im a full stack deeloper" />
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

