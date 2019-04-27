/**
 * @module plopfile.js
 * @see https://plopjs.com/documentation
 */

module.exports = function(plop) {
  plop.setGenerator('component', {
    actions: [{
      path: 'app/components/{{ lowerCase path }}{{ pascalCase name }}/index.js',
      templateFile: 'templates/components/Example/index.js.hbs',
      type: 'add',
    }, {
      path: 'app/components/{{ lowerCase path }}{{ pascalCase name }}/{{ pascalCase name }}.css',
      templateFile: 'templates/components/Example/Example.css.hbs',
      type: 'add',
    }, {
      path: 'app/components/{{ lowerCase path }}{{ pascalCase name }}/{{ pascalCase name }}.jsx',
      templateFile: 'templates/components/Example/Example.jsx.hbs',
      type: 'add',
    }, {
      path: 'app/components/{{ lowerCase path }}{{ pascalCase name }}/{{ pascalCase name }}.spec.js',
      templateFile: 'templates/components/Example/Example.spec.js.hbs',
      type: 'add',
    }, {
      path: 'app/components/{{ lowerCase path }}{{ pascalCase name }}/{{ pascalCase name }}.stories.js',
      templateFile: 'templates/components/Example/Example.stories.js.hbs',
      type: 'add',
    }],
    description: 'Generates a new component.',
    prompts: [{
      message: 'component name:',
      name: 'name',
      type: 'input',
    }, {
      filter: value => value ? `${value}/` : '',
      message: 'component path:',
      name: 'path',
      type: 'input',
    }],
  });
  plop.setGenerator('container', {
    actions: [{
      path: 'app/containers/{{ pascalCase name }}.jsx',
      templateFile: 'templates/containers/Example.jsx.hbs',
      type: 'add',
    }],
    description: 'Generates a new container component.',
    prompts: [{
      message: 'container component name:',
      name: 'name',
      type: 'input',
    }],
  });
  plop.setGenerator('page', {
    actions: [{
      path: 'app/pages/{{ pascalCase name }}/index.js',
      templateFile: 'templates/pages/Example/index.js.hbs',
      type: 'add',
    }, {
      path: 'app/pages/{{ pascalCase name }}/{{ pascalCase name }}.css',
      templateFile: 'templates/pages/Example/Example.css.hbs',
      type: 'add',
    }, {
      path: 'app/pages/{{ pascalCase name }}/{{ pascalCase name }}.jsx',
      templateFile: 'templates/pages/Example/Example.jsx.hbs',
      type: 'add',
    }],
    description: 'Generates a new page component.',
    prompts: [{
      message: 'page component name:',
      name: 'name',
      type: 'input',
    }],
  });
  plop.setGenerator('state', {
    actions: [{
      path: 'app/state/{{ dashCase name }}/index.js',
      templateFile: 'templates/state/example/index.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/actions.js',
      templateFile: 'templates/state/example/actions.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/reducer.js',
      templateFile: 'templates/state/example/reducer.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/sagas.js',
      templateFile: 'templates/state/example/sagas.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/selectors.js',
      templateFile: 'templates/state/example/selectors.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/types.js',
      templateFile: 'templates/state/example/types.js.hbs',
      type: 'add',
    }, {
      path: 'app/state/{{ dashCase name }}/utilities.js',
      templateFile: 'templates/state/example/utilities.js.hbs',
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
