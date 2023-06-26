const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js')
const Text = require('./lib/text.js')


const LogoSVG = () =>
`<svg width="800" height="800" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<g opacity="1.0">
	<circle cx="150" cy="120" r="80" fill="green" />
  	<polygon points="150, 18 244, 182 56, 182" fill="yellow"/>
	<rect x="88" y="59" width="125" height="125" fill="red"/>
	<text x="110" y="135"><tspan font-weight="bold" font-size="40px" fill="white">SVG</tspan></text>

</g>
</svg>
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'What is your text(maximum 3 characters)?',
    },
    {
      type: 'input',
      name: 'text-color',
      message: 'What was your text color?',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'What shape do you want to create ?',
      choices: ['Triangle','Circle','Square']
    },
    {
        type: 'input',
        name: 'shape-color',
        message: 'What is your shape color?',
    }
  ])
  .then((answers) => {
    const readmecontent = LogoSVG();
    fs.writeFile('./example/logo.svg', readmecontent, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg !')
    )}
  )