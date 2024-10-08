import React from 'react';
import { Heading, Text, Button, VStack } from '@chakra-ui/react';

const NoteItem = ({ note, onDelete }) => {
  return (
    <VStack align="start">
      <Heading size="md">{note.title}</Heading>
      <Text>{note.content.substring(0, 100)}...</Text>
      <Button colorScheme="red" onClick={() => onDelete(note._id)}>
        Delete
      </Button>
    </VStack>
  );
};

export default NoteItem;
