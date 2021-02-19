import React from 'react';
import { render } from 'react-dom';
import MainReactRouter from './containers/MainReactRouter'

import {TestProvider} from './components/GlobalContext'

render(
  <TestProvider>  
    <MainReactRouter />
  </TestProvider>  ,
  document.getElementById('app'),
);

