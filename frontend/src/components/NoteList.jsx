import React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import NoteItem from './NoteItem';

const NoteList = ({ notes, onDelete }) => {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={6} width="100%">
      {notes.map((note) => (
        <Box key={note._id} p={4} shadow="md" borderWidth="1px" borderRadius="lg" bg="white">
          <NoteItem note={note} onDelete={onDelete} />
        </Box>
      ))}
    </SimpleGrid>
  );
};

export default NoteList;
