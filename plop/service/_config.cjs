const validate = require('../_shared/validate.cjs')

module.exports = {
  description: 'Create a service',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your service name?',
      validate: validate.validate([
        validate.validators.requireField
      ])
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/services/{{pascalCase name}}/{{pascalCase name}}.tsx',
      templateFile:
        'plop/service/service.hbs'
    },
    {
      type: 'add',
      path: 'src/services/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
      templateFile:
        'plop/service/service.test.hbs'
    },
    {
      type: 'add',
      path: 'src/services/{{pascalCase name}}/index.ts',
      templateFile: 'plop/service/index.hbs'
    },
    {
      type: 'add',
      path: 'src/services/index.ts',
      templateFile: 'plop/injectableIndex.hbs',
      skipIfExists: true
    },
    {
      type: 'append',
      path: 'src/services/index.ts',
      pattern: '/* PLOP_INJECT_EXPORT */',
      template: 'export { default as {{pascalCase name}} } from \'./{{pascalCase name}}\''
    }
  ]
}
