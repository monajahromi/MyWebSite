import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './components/Main';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact>
          <Main />
        </Route>

    </BrowserRouter>

  );
}

export default App;
