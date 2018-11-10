/**
 * @module app/state/routes/reducer
 */

import routes from 'app/routes';
import { mapRoutes } from './utilities';

const initialState = mapRoutes(routes);

export default function reducer (state = initialState) {
  return state;
}
