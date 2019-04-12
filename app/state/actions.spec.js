/**
 * @module app/state/actions.spec
 */

import { createAction, createActionTypes } from 'app/state/actions';

describe('State / Actions', () => {
  describe('createAction()', () => {
    it('should return an object', () => {
      expect(createAction('TEST_ACTION')).to.be.an('object');
    });

    it('should have a type property', () => {
      expect(createAction('TEST_ACTION')).to.have.property('type');
    });

    it('should only have a type when no payload is passed', () => {
      expect(createAction('TEST_ACTION')).to.deep.equal({ type: 'TEST_ACTION' });
    });

    it('should be a properly formatted object', () => {
      const action = createAction('TEST_ACTION', { data: [1, 2, 3] });
      expect(action).to.deep.equal({ data: [1, 2, 3], type: 'TEST_ACTION' });
    });
  });

  describe('createActionTypes()', () => {
    it('should be an object with the necessary keys', () => {
      const actionTypes = createActionTypes('test', ['ONE', 'TWO']);
      expect(actionTypes).to.be.an('object').to.have.keys('ONE', 'TWO');
    });

    it('should have the proper namespace values', () => {
      const actionTypes = createActionTypes('test', ['TEST']);
      expect(actionTypes).to.deep.equal({ TEST: '@app/test/TEST' });
    });
  });
});
