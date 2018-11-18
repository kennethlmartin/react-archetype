/**
 * @module app/state/routes/reducer
 */

import routes from 'app/routes';
import { mapRoutes } from './utilities';

const INITIAL_STATE = mapRoutes(routes);

export default function reducer (state = INITIAL_STATE) {
  return state;
}
