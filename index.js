#!/usr/bin/env node

/* Based on Shalvah's Resume -- If you wish to know more, please visit: 
https://github.com/shalvah/shalvah/

Thank you, Shalvah! Please invite this man a beer. 
*/

const program = require('commander');
const inquirer = require('inquirer');
const opn = require('opn');
const gusma = require('./src/data');

program.version('1.0.0')
    .description('Gustavo Malamuds Resume - The Console.log Version')
    .parse(process.argv);

console.log(gusma.bio);
inquirer.prompt({
    name: 'link',
    type: 'list',
    message: gusma.prompt,
    choices: gusma.links.concat({
        'name': `Email at (${gusma.email})`,
        'value': 'mailto:' + gusma.email + 'subject=Contact from NPM Module'
    })

}).then(answers => {
    console.log(`Opening ${answers.link}`);
    opn(answers.link);
});