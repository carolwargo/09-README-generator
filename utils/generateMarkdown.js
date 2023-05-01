//LICENSE BADGE function 
function renderLicenseBadge(license) {

  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'GPL 3.0') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'BSD 3') {
    return '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  } else if (license === 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)';
  } else {
    return '';
  }
}

//LICENSE LINK function 
function renderLicenseLink(license) {

  if (license === 'MIT') {
    return 'https://opensource.org/licenses/MIT';
  } else if (license === 'Apache 2.0') {
    return 'https://opensource.org/licenses/Apache-2.0';
  } else if (license === 'GPL 3.0') {
    return 'https://www.gnu.org/licenses/gpl-3.0';
  } else if (license === 'BSD 3') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'Unlicense') {
    return 'http://unlicense.org/';
  } else {
    return '';
  }
}

//LICENSE link MARKDOWN
// If there is no license, return an empty string

//RENDER LICENSE SECTION function
function renderLicenseSection(license) {
  if (license) {
    return `

## License
This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.`;
  } else {
    return '';
  }
}

//GENERATE markdown function 
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#License)
* [Tests](#tests)
* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

## Contributing

${data.contributing}

## License
${renderLicenseLink(data.license) ? '* [License](#license)\n' : ''} 

## Tests
To run tests, run the following command:

\`\`\`
${data.tests}
\`\`\`

### Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). 

View my profile for additional projects at [${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
