import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';

import App from 'components/App';

render(<App />,
document.querySelector('#root'))