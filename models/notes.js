const { query } = require("../db/index.js");

async function getNotes() {
    const result = await query("SELECT * FROM notes;")
    const notesArray = result.rows;
    return notesArray.map(note => ({
        ...note,
        time: parseInt(note.time)
    }));
}

async function addNote(content) {
    const time = Date.now();
    const req = await query(`INSERT INTO notes (time, content) VALUES (${time}, '${content}') RETURNING id;`);

    return {
        id: req.rows[0].id,
        time,
        content,
    };
}

async function deleteNote(id) {
    await query(`DELETE FROM notes WHERE id = ${id};`);
}

module.exports = {
    getNotes,
    addNote,
    deleteNote,
};