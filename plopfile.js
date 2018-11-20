/**
 * @module plopfile.js
 * @see https://plopjs.com/documentation
 */

module.exports = function (plop) {
  plop.setGenerator('state', {
    actions: [{
      path: 'app/state/{{ dashCase name }}/index.js',
      templateFile: 'templates/state/example/index.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/actions.js',
      templateFile: 'templates/state/example/actions.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/constants.js',
      templateFile: 'templates/state/example/constants.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/reducer.js',
      templateFile: 'templates/state/example/reducer.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/sagas.js',
      templateFile: 'templates/state/example/sagas.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/selectors.js',
      templateFile: 'templates/state/example/selectors.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/utilities.js',
      templateFile: 'templates/state/example/utilities.hbs',
      type: 'add',
    }],
    description: 'Generates a new state directory.',
    prompts: [{
      message: 'state name:',
      name: 'name',
      type: 'input',
    }],
  });
};
