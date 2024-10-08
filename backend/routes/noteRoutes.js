const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Create Note
router.post('/notes', async (req, res) => {
    try {
        const note = new Note({
            title: req.body.title,
            content: req.body.content,
        });
        await note.save();
        res.status(201).json(note);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Get All Notes
router.get('/notes', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get Note by ID
router.get('/notes/:id', async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) return res.status(404).json({ message: "Note not found" });
        res.json(note);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// // Update Note by ID
// router.put('/notes/:id', async (req, res) => {
//     try {
//         const updatedNote = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         res.json(updatedNote);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// Delete Note by ID
router.delete('/notes/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: "Note deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;
  
    try {
      // Find the note by ID and update it with new data
      const updatedNote = await Note.findByIdAndUpdate(
        id,
        { title, content }, // Fields to update
        { new: true } // Option to return the updated note
      );
  
      if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
      }
  
      // Send the updated note as response
      res.json(updatedNote);
    } catch (error) {
      console.error('Error updating note:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

module.exports = router;
