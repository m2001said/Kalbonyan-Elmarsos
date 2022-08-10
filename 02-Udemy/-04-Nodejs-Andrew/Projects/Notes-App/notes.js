const fs = require("fs");
const chalk = require("chalk");

////////////////////

const addNotes = (title, body) => {
  const notes = loadNotes();
  // const duplicateNotes = notes.filter(function (note) {
  //   return note.title == title;
  // });
  const duplicateNotes = notes.find((note) => note.title == title);

  if (!duplicateNotes) {
    notes.push({
      title: title,
      body: body,
    });

    saveNotes(notes);
    console.log(chalk.bold.inverse.green("new note added"));
  } else {
    console.log(chalk.bold.inverse.red("note title taken"));
  }
};
////////////////////
const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bold.inverse.green("Note removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bold.inverse.red("No note removed"));
  }
};
////////////////////
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
////////////////////
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};
////////////////////
const listNotes = (title) => {
  console.log(chalk.bold.inverse.blue("your notes"));
  const notes = loadNotes();
  notes.forEach((element) => {
    console.log(chalk.bold.blue(element.title));
  });
};
////////////////////
const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.bold.inverse.yellow(note.title));
    console.log(chalk.bold.yellow(note.body));
  } else {
    console.log(chalk.bold.inverse.red("Note not found"));
  }
};
////////////////////

module.exports = {
  addNotes: addNotes,
  removeNote: removeNote,
  listNotes: listNotes,
  readNotes: readNotes,
};
