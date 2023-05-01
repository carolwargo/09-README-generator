//GENERATE markdown function 
function generateMarkdown(data) {
  return `# ${data.title}

  [![License](https://img.shields.io/badge/License-${data.license.link}-${data.license.color}.svg)](${data.license.url})

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
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## License
${data.title} is licensed under the ${data.license.name} License.


## Tests
To run tests, run the following command:
${data.tests}

### Questions
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). 

View my profile for additional projects at [${data.github}](https://github.com/${data.github})`;
}

module.exports = generateMarkdown;
