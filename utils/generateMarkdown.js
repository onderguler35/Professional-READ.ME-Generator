// function to generate markdown for README
// Table of contents are clickable list which will take to relevant title for ease of access.
// licence prompt is formed of 3 choice selection of licences. User can use the arrowUP and arrowDown to choose relevant option for themselves.
// The licence badge appears under the title of the readme and uses the auto-badge creation facility of shields.io
function generateMarkdown(data) {
  return `
  
# ${data.title} 

![Licence Badge](https://img.shields.io/badge/${data.licence}-Licence-green)

## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Licence](#Licence)
* [Features](#Features)
* [Contribute](#Contribute)

## Description
Video walkthrough of the app link will be here after recording

${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

## Licence
${data.licence}

## Features
${data.features}

## Contribute
${data.contribute}

## Tests
${data.tests}

## Questions
Please click this link to go to [Github repo](https://github.com/${data.githubID}/${data.githubRepo})
For any questions or comments please [contact me](mailto:${data.userQuestions})
`;
}

module.exports = generateMarkdown;
