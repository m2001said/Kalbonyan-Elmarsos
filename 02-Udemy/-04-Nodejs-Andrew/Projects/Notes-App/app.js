//!
//The notes project
//!
//to remember the first Nodejs problems which face me
//problems which i had at the last of this page
//!

//require package which are from npmjs page
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      description: "Note title",
      // to force you to write the title
      demandOption: true,
      type: "string",
    },
    body: {
      description: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Adding a new note!!", argv);
    // console.log(`title is : ${argv.title} , body is : ${argv.body}`);
    notes.addNotes(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "remove a  note",
  builder: {
    title: {
      description: "Note title",
      // to force you to write the title
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("removing a note!!");
    notes.removeNote(argv.title);
  },
});

// challenge 03
//create list command
yargs.command({
  command: "list",
  describe: "list of notes",
  handler(argv) {
    // console.log("Listing out all notes");
    notes.listNotes(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "read a note",
  builder: {
    title: {
      description: "Note title",
      // to force you to write the title
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log("Reading notes");
    notes.readNotes(argv.title);
  },
});

console.log(yargs.argv);

// //challenge 01
// const fs = require("fs");
//make a new txt file
// fs.writeFileSync("notes.txt", "My name is Mohamed Said ");
//add new sentences in the file
// fs.appendFileSync("notes.txt", "My age is 21.");

// //challenge 02
// const mes = require("./notes.js");
// mes("this is the 2 challenge");

// //challenge 03
// import chalk from "chalk";
// const chalk = require("chalk");

// console.log(chalk.bold.inverse.green("Hello world!"));
// i have a problem here and the solution is ==> this because the new version of chalk is using import not require
//Chalk 5 is ESM ,If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now.
//// package.json => you should put this in it
// //{
//// "type": "module"
////}
