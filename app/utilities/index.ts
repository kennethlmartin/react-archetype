/**
 * @module app/utilities
 */

import { equals, allPass, flip, gte, lt } from 'ramda';

/**
 * HTTP status codes
 */
export const is404Error = equals(404);
export const is4xxError = allPass([flip(gte)(400), flip(lt)(500)]);
export const is5xxError = allPass([flip(gte)(500), flip(lt)(600)]);
