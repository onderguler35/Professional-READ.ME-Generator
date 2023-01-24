// array of questions for user in form of array of objects, it will be exported for inquirer to use and produce response from the user.
const questions = [
    {
        name: 'githubID', 
        message:"What's github username?"
    },

    {
        name: 'githubRepo', 
        message:"What's the GitHub repo name?"
    },

    {
        name: 'title', //name part will be assigned as the prop of the object so the answer can  be called as data.title etc.
        message:"What's the project title?"
    },

    {
        name: 'description',
        message:"Please enter the project description?"
    },

    {
        name: 'installation',
        message:"Please input installation instructions?"
    },

    {
        name: 'usage',
        message:"Please supply information on usage?"
    },

    {
        name: 'credits',
        message:"Please enter any credits you would like to add?"
    },

    {
        name: 'licence',
        message:"Which licence would you prefer for your project?",
        type: 'list', //creates a list of options from the choices array below that the user can choose
        choices: ['Apache Licence 2.0', 'GNU General Public Licence v3.0','MIT Licence',]
    },

    {
        name: 'features',
        message:"What features does the project have?"
    },

    {
        name: 'contribute',
        message:"Instructions for developers who would like to contribute?"
    },


];
// exporting the array of questions to share with other modules
module.exports = questions;