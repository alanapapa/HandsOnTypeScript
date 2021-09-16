import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import ScreenC from './ScreenC';

function App() {
  const renderScreenC = (props: any) => {
    console.log("ScreenC props", props);
    return <ScreenC {...props} message="This is Screen C" />;
    };

  return (
    <Switch>
      <Route exact path="/" component={ScreenA} />
      <Route path="/b" component={ScreenB} />
      <Route exact path="/c/:userid" render={renderScreenC} />
    </Switch>
  );
}

export default App;
