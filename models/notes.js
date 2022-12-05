import { query } from "../db/index.js"; 

export async function getNotes() {
    const result = await query("SELECT * FROM notes;")
    return result.rows;  
}

export async function addNote(newContent) {
    const result = await query("INSERT INTO notes (content) VALUES ($1)  RETURNING *;", [newContent.content]);
    return result.rows[0]
}   

export async function deleteNote(deleteId) {
    const result = await query("DELETE FROM notes WHERE id = ($1) RETURNING*;", [deleteId]);
    return result.rows[0];
}

