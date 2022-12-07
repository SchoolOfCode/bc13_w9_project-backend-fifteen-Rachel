import express from "express";
import { getNotes, addNote, deleteNote, editNote } from "../models/notes.js"


const codeRouter = express.Router();

codeRouter.get("/", async function (req, res) {
    const notes = await getNotes();
    res.json({ success: true, payload: notes });
});

codeRouter.post("/", async function (req, res) {
    const noteContent = req.body;
    const note = await addNote(noteContent);
    res.json({ success: true, payload: note });
});

codeRouter.delete("/:id", async function (req, res) {
    const deleted = await deleteNote(req.params.id);
    res.json({ success: true, payload: deleted });
});

codeRouter.patch("/:id", async function (req, res) {
    const edit = await editNote(req.body, req.params.id);
    res.json({ success: true, payload: edit });
});

export default codeRouter;