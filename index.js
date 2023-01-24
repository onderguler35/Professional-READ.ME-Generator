const fs = require("fs"); // file system management package which we need to write into the local file. It is an inhouse package of node.
const inquirer = require("inquirer"); // this is the only package dependency we need to recieve input from the user in the command line asking questions and getting the answers in an object format which then we can parse and write to local file.
const generateMarkdown = require("./utils/generateMarkdown"); //importing a function from another module
const questions = require("./utils/questions"); //importing a function from another module

// function to write README file
// it will use the data coming from the generateMarkdown function
function writeToFile(data) {
  fs.writeFile("README.md", data, (error) => {
    if (error) throw error; // seen this on w3schools fs package examples and loved it.
    //The ending wording below for the user letting them know code successfully completed and written file.
    console.log(`

        ----------------------------------------------------------

        README file is created and written successfully.
        Thank you for using the app.`);
  });
}
// function to initialize program. Everything starts here!
//It used the array shared by questions.js which includes the array of questions as objects.
function init() {
  inquirer
    .prompt(questions) // question shared by module question.js
    .then(generateMarkdown) // generateMarkdown shared by module generateMarkdown.js uses data from inquirer to create the README template.
    .then(writeToFile); // writes the generated README file to ./README,md
} // .then in 2 lines above is to wait for the previous task to continue the next one to work in an async way and also to make sure data is ready to proceed.

// function call to initialize program
init();
