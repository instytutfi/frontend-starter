const validate = require('../_shared/validate.cjs')

const COMPONENT_TYPES = ['component', 'layout', 'page']

module.exports = {
  description: 'Create a component/layout/page',
  prompts: [
    {
      type: 'list',
      choices: COMPONENT_TYPES,
      name: 'type',
      message: 'What is your component type?',
      validate: validate.validate([
        validate.validators.requireField
      ])
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your component name?',
      validate: validate.validate([
        validate.validators.requireField
      ])
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{camelCase type}}s/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile:
        'plop/component/component.hbs'
    },
    {
      type: 'add',
      path: 'src/{{camelCase type}}s/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile:
        'plop/component/component.test.hbs'
    },
    {
      type: 'add',
      path: 'src/{{camelCase type}}s/{{pascalCase name}}/index.ts',
      templateFile: 'plop/component/index.hbs'
    },
    {
      type: 'add',
      path: 'src/{{camelCase type}}s/index.ts',
      templateFile: 'plop/injectableIndex.hbs',
      skipIfExists: true
    },
    {
      type: 'append',
      path: 'src/{{camelCase type}}s/index.ts',
      pattern: '/* PLOP_INJECT_EXPORT */',
      template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}\''
    }
  ]
}
