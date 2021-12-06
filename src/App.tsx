import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import WholeContext from './game_context';

import Start from './pages/start/start.component';
import Play from './pages/play/play.component';
import End from './pages/end/end.component';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
  
  return (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <WholeContext>
          <Route exact path="/start">
              <Start />
            </Route>
            <Route path="/play">
              <Play />
            </Route>
            <Route path="/end">
              <End />
            </Route>
            <Route exact path="/">
              <Redirect to="/start" />
            </Route>
        </WholeContext>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
)};

export default App;
