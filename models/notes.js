import { pool } from "../db/index.js"; 

export async function getNotes() {
    const result = await pool.query("SELECT * FROM notes;")
    const notesArray = result.rows;
    return notesArray.map(note => ({
        ...note,
        time: parseInt(note.time)
    }));
}

export async function addNote(newContent) {
    const sqlQuery = "INSERT INTO notes (content) VALUES ($1)  RETURNING *;";
    const param = [newContent.content];
    const result = await pool.query(sqlQuery, param);
    const created = result.rows[0]
    return created
}   

export async function deleteNote(deleteId) {
    const result = await pool.query("DELETE FROM notes WHERE id = ($1) RETURNING*;", [deleteId]);
    const deleted = result.rows[0];
    return deleted
}

