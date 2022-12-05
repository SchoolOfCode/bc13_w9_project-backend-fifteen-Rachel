import { pool } from "../db/index.js"; 

export async function getNotes() {
    const result = await pool.query("SELECT * FROM notes;")
    const notesArray = result.rows;
    return notesArray.map(note => ({
        ...note,
        time: parseInt(note.time)
    }));
}

export async function addNote(content) {
    const time = Date.now();
    const req = await pool.query(`INSERT INTO notes (time, content) VALUES (${time}, '${content}') RETURNING id;`);

    return {
        id: req.rows[0].id,
        time,
        content,
    };
}

export async function deleteNote(id) {
    await pool.query(`DELETE FROM notes WHERE id = ${id};`);
}

