
import { combineReducers } from 'redux';

import drawer from './drawer';
import routes from './routes';
import modal from './modal';
import cardNavigation from './cardNavigation';

export default combineReducers({

  drawer,
  modal,
  cardNavigation,
  routes
});
