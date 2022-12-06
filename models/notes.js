import { pool } from "../db/index.js"; 

export async function getNotes() {
    const result = await pool.query("SELECT * FROM notes;")
    return result.rows;  
}

export async function addNote(newContent) {
    const result = await pool.query("INSERT INTO notes (content) VALUES ($1)  RETURNING *;", [newContent.content]);
    return result.rows[0]
}   

export async function deleteNote(deleteId) {
    const result = await pool.query("DELETE FROM notes WHERE id = ($1) RETURNING *;", [deleteId]);
    return result.rows[0];
}

export async function editNote(editContent, editID) {
    console.log(editContent.content);
    const result = await pool.query("UPDATE notes SET content = ($1) WHERE id = ($2) RETURNING *;", [editContent.content, editID]);
    console.log(result.rows);
    return result.rows;
}

