const express = require("express");
const router = express.Router();


const { getNotes, addNote, deleteNote } = require("../models/notes.js");

router.get("/", async function (req, res) {
    const notes = await getNotes();

    res.json({ success: true, payload: notes });
});

router.post("/", async function (req, res) {
    const noteContent = req.body.content;
    const note = await addNote(noteContent);

    res.json({ success: true, payload: note });
});

router.delete("/:id", async function (req, res) {
    const id = req.params.id;
    await deleteNote(id);

    res.json({ success: true });
});

module.exports = router;