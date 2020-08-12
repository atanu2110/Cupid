
import React, { useContext } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AppContext } from '../Components/context';
import Gallery from '../Components/Gallery';
import Capture from '../Components/Capture.jsx';
import MapContainer from '../Components/MapContainer.jsx';

function Routes() {
  const [state, setState] = useContext(AppContext);

  return (
    <HashRouter>
      <Switch>
       <Route
          exact
          path={"/capture"}
          component={() => <Capture />}
        />
          <Route
          exact
          path={"/navigate"}
          component={() => <MapContainer />}
        />
        
       
        {/* Deafault page */}
        <Route component={Gallery} />
      </Switch>
    </HashRouter>
  );
}

export default Routes;
