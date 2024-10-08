import React, { useState } from 'react';
import { SimpleGrid, Box, useDisclosure } from '@chakra-ui/react';
import NoteItem from './NoteItem';
import EditNoteModal from './EditNoteModal'; // Import the edit modal component

const NoteList = ({ notes, onDelete, onUpdate }) => {
  const [selectedNote, setSelectedNote] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleEdit = (note) => {
    setSelectedNote(note); // Set the selected note for editing
    onOpen(); // Open the modal
  };

  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} width="100%">
        {notes.map((note) => (
          <Box key={note._id} p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
            <NoteItem note={note} onDelete={onDelete} onEdit={handleEdit} />
          </Box>
        ))}
      </SimpleGrid>

      {selectedNote && (
        <EditNoteModal
          isOpen={isOpen}
          onClose={onClose}
          note={selectedNote}
          onUpdate={onUpdate}
        />
      )}
    </>
  );
};

export default NoteList;
