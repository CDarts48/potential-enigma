// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
// Generate the HTML string???

// Check the end of last nights video for the correct way to do the above for the html creation then adjust for a read me file
// Array copied from github.com/dopecello 
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please name your Project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please describe the purpose and functionality of this project.",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: "input",
    name: "link",
    message: "Please provide a URL where a user can access your app."
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "Boost1.0", "MPL2.0", "BSD2", "BSD3", "none"],
  },
  {
    type: "input",
    name: "require",
    message: "List any project dependencies here.",
  },
  {
    type: "input",
    name: "features",
    message: "List some cool features about this project here.",
  },
  {
    type: "input",
    name: "usage",
    message:
      "State the languages or technologies associated with this project.",
  },
  {
    type: "input",
    name: "creator",
    message: "Write your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Provide a valid email address.",
  },
  {
    type: "input",
    name: "contributors",
    message: "Please list any contributors. (Use GitHub usernames)",
    default: "",
  },
  {
    type: "input",
    name: "test",
    message: "Provide walkthrough of required tests if applicable.",
  },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  
}
inquirer.prompt(questions).then((answers) => {
  // Write the answers to a new file
  fs.writeFile("readme.md", generateMarkdown(answers), (err) => {
    if (err) throw err;
    console.log("Data written to file");
  });
  // TODO: Create a function to initialize app
  function init() {}

  // Function call to initialize app
  init();
});


// peramaters are slots that you can grab somewhere else function (per_+_+_amiter1, peramiter2)