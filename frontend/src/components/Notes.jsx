import React, { useState, useEffect } from 'react';
import { Box, Spinner, Text, VStack } from '@chakra-ui/react';
import axios from 'axios';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get('/api/notes');
      setNotes(res.data);
    } catch (err) {
      setError('Failed to load notes');
    } finally {
      setLoading(false);
    }
  };

  const addNote = async (newNote) => {
    try {
      const res = await axios.post('/api/notes', newNote);
      setNotes([...notes, res.data]);
    } catch (err) {
      setError('Failed to save note');
    }
  };

  const deleteNote = async (id) => {
    try {
      await axios.delete(`/api/notes/${id}`);
      setNotes(notes.filter(note => note._id !== id));
    } catch (err) {
      setError('Failed to delete note');
    }
  };


  const updateNote = async (id, updatedNote) => {
    try {
      const res = await axios.put(`/api/notes/${id}`, updatedNote);
      setNotes(
        notes.map((note) => (note._id === id ? { ...note, ...updatedNote } : note))
      );
    } catch (err) {
      setError('Failed to update note');
    }
  };

  return (
    <Box p={5} bg="gray.50" minH="100vh" className="mt-5 text-center" style={{backgroundImage: "url('/noteTking.jpg')", 
        backgroundSize: "cover", 
        backgroundPosition: "center", 
        backgroundRepeat: "no-repeat", 
        minHeight: "100vh",}}>
      <VStack spacing={5} align="center">
        <Text fontSize="3xl" fontWeight="bold">Note-Taking App</Text>
        {loading && <Spinner size="lg" />}
        {error && <Text color="red.500">{error}</Text>}
        <NoteList notes={notes} onDelete={deleteNote} onUpdate={updateNote} />
        <NoteForm onAddNote={addNote} />
      </VStack>
    </Box>
  );
};

export default Notes;
