const validate = require('../_shared/validate.cjs');

const startsWithUse = (value) => {
  return !value.startsWith('use') ? 'Hook name must start with "use"' : true
}

const isMin4Chars = (value) => {
  return value.length < 4 ? 'Hook name must contain at least 4 characters' : true
}

module.exports = {
  description: 'Create a reusable hook',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What is your hook name?',
      validate: validate.validate([
        validate.validators.requireField,
        startsWithUse,
        isMin4Chars
      ])
    }
  ],
  actions: [
    {
      type: 'add',
      path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.ts',
      templateFile:
        'plop/hook/hook.hbs'
    },
    {
      type: 'add',
      path: 'src/hooks/{{camelCase name}}/{{camelCase name}}.test.ts',
      templateFile:
        'plop/hook/hook.test.hbs'
    },
    {
      type: 'add',
      path: 'src/hooks/{{camelCase name}}/index.ts',
      templateFile: 'plop/hook/index.hbs'
    },
    {
      type: 'add',
      path: 'src/hooks/index.ts',
      templateFile: 'plop/injectableIndex.hbs',
      skipIfExists: true
    },
    {
      type: 'append',
      path: 'src/hooks/index.ts',
      pattern: '/* PLOP_INJECT_EXPORT */',
      template: 'export { default as {{camelCase name}} } from \'./{{camelCase name}}\''
    }
  ]
}
