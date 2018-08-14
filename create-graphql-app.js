#!/usr/bin/env node

const program = require('commander');
const app = require('./package.json')

// const { addContact, getContact } = require('./logic');

program
  .version(app.version, '-v, --version')
  .description(app.description)
  // .option('-t, --template', 'which template to use')

program
  .command('*')
  .arguments('<project>')
  .description('Scafold a project with name <project>')
  .action((project, cmd) => {
    console.log(project, cmd)
    console.log(__dirname, process.cwd())
  });

program.parse(process.argv);
