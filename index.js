const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js')
const Text = require('./lib/text.js')


const LogoSVG = ({textcolor,shapecolor},userShapeData,userTextData) =>
`<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="800" height="800" viewBox="-70.5 -70.5 391 391" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

<g opacity="1.0">
	${userShapeData} fill="${shapecolor}" />
	<text x="110" y="135"><tspan font-weight="bold" font-size="40px" fill="${textcolor}">${userTextData}</tspan></text>

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
      name: 'textcolor',
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
        name: 'shapecolor',
        message: 'What is your shape color?',
    }
  ])
  .then((answers) => {
      if(answers.text.length === 3) {
          const usershape = new Shape (answers.shape);
          const usertext = new Text (answers.text);
          const userShapeData = usershape.checkShape(usershape.shape);
          const userTextData = usertext.checkText(usertext.text);
          const logo = LogoSVG(answers,userShapeData,userTextData);
          fs.writeFile('./exmaple/logo.svg', logo, (err) =>
          err ? console.log(err) : console.log('Generated logo.svg !')
        )
      } else {
          console.log('Your text have to have maximum 3 characters!!')
        }
    }
  )
  