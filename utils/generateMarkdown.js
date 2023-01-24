// function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title}
## Table of Contents
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [Licence](#Licence)
* [Features](#Features)
* [Contribute](#Contribute)

## Description
[Github repo link](https://github.com/${data.githubID}/${data.githubRepo})

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
`;
}

module.exports = generateMarkdown;
