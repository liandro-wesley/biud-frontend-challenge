module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a new component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../../../../presentation/components/{{pascalCase name}}/index.tsx',
        templateFile: '../templates/Component.tsx.hbs'
      },
      {
        type: 'add',
        path: '../../../../presentation/components/{{pascalCase name}}/styles.ts',
        templateFile: '../templates/styles.tsx.hbs'
      },
    ]
  });
}

