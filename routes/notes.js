import express from "express";
import { getNotes, addNote, deleteNote } from "../models/notes.js"


const codeRouter = express.Router();

codeRouter.get("/", async function (req, res) {
    const notes = await getNotes();

    res.json({ success: true, payload: notes });
});

codeRouter.post("/", async function (req, res) {
    const noteContent = req.body.content;
    const note = await addNote(noteContent);

    res.json({ success: true, payload: note });
});

codeRouter.delete("/:id", async function (req, res) {
    const id = req.params.id;
    await deleteNote(id);

    res.json({ success: true });
});

export default codeRouter;