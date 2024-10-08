import React, { useState } from 'react';
import { VStack, Input, Textarea, Button, Box } from '@chakra-ui/react';

const NoteForm = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newNote.title && newNote.content) {
      onAddNote(newNote);
      setNewNote({ title: '', content: '' });
    }
  };

  return (
    <Box width="100%" p={5} bg="white" borderRadius="md" shadow="md">
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Input
          placeholder="Title"
          value={newNote.title}
          onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
          bg="gray.50"
        />
        <Textarea
          placeholder="Content"
          value={newNote.content}
          onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
          bg="gray.50"
        />
        <Button type="submit" colorScheme="blue">
          Add Note
        </Button>
      </VStack>
    </Box>
  );
};

export default NoteForm;
