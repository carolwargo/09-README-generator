const fs=require ('fs');
//WHAT FILES DO I NEED TO IMPORT IMPORTED files
const {writeFile} = require ('fs/promises');
const {prompt} = require ('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown');

//ASYNC -OR
async function writeToFileAsync(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Successfully wrote to ${fileName}`);
  } catch (error) {
    console.error(`Error writing to ${fileName}: ${error}`);
  }
}

// -REGULAR FUNCTION 
function writeToFileCallback(fileName, data) {
  writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("File written successfully!")
  );
}


const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email?",
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: (title) => {
      if (title) {
        return true;
      } else {
        console.log("Please enter a title for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description for your project:",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        console.log("Please enter a description for your project.");
        return false;
      }
    },
  },

  {
    type: 'list',
    name: 'license',
    message: 'Please choose a license for your application.',
    choices: [
      {
        name: 'Apache 2.0 License',
        value: {
          name: 'Apache 2.0 License',
          link: 'Apache%202.0',
          url: 'https://opensource.org/licenses/Apache-2.0',
          color: 'blue'
        }
      },
      {
        name: 'MIT License',
        value: {
          name: 'MIT License',
          link: 'MIT',
          url: 'https://opensource.org/licenses/MIT',
          color: 'yellow'
        }
      },
      {
        name: 'GPL 3.0 License',
        value: {
          name: 'GPL 3.0 License',
          link: 'GPLv3',
          url: 'https://www.gnu.org/licenses/gpl-3.0',
          color: 'blue'
        }
      },
      {
        name: 'BSD 3-Clause License',
        value: {
          name: 'BSD 3-Clause License',
          link: 'BSD%203--Clause',
          url: 'https://opensource.org/licenses/BSD-3-Clause',
          color: 'orange'
        }
      },
      {
        name: 'The Unlicense',
        value: {
          name: 'The Unlicense',
          link: 'Unlicense',
          url: 'http://unlicense.org',
          color: 'blue'
        }
      }
      
    ]
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for your project?",
    validate: (installation) => {
      if (installation) {
        return true;
      } else {
        console.log("Please enter installation instructions for your project.");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "usage",
    message: "What are the usage instructions for your project?",
    validate: (usage) => {
      if (usage) {
        return true;
      } else {
        console.log("Please enter usage instructions for your project.");
        return false;
      }
    },
  },
  
  {
    type: "input",
    name: "questions",
    message:"Please provide instructions on how to report issues and how to make contributions. Also, include your GitHub profile and email for direct contact.",
    validate: (questions) => {
      if (questions) {
        return true;
      } else {
        console.log("Please enter instructions for questions to your project.");
        return false;
      }
    },
  },  
];

//ASYNC pause execution until PROMISE resolved
//SEARCH user avatar by github username
/*async function findAvatar(username) {
  const userData = await get(`https://api.github.com/search/users?q=${username}`);
  return userData.data.items[0].avatar_url;
}*/

//ASYNC initialize app?
async function init() {
  try {
    const answers = await prompt(questions);
    //answers.avatar = await findAvatar(answers.github);
    console.log('Generating README.md...');
    await writeFile('README.md', generateMarkdown(answers));
    console.log("File written successfully!");
  } catch (error) {
    console.log(error);
  }
}

// INITIALIZE call
init();