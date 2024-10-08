import React from 'react';
import { Heading, Text, Button, VStack, HStack } from '@chakra-ui/react';

const NoteItem = ({ note, onDelete, onEdit }) => {
  return (
    <VStack align="start">
      <Heading size="md">{note.title}</Heading>
      <Text>{note.content.substring(0, 100)}...</Text>
      <HStack spacing={4}>
        <Button colorScheme="blue" onClick={() => onEdit(note)}>Edit</Button>
        <Button colorScheme="red" onClick={() => onDelete(note._id)}>Delete</Button>
      </HStack>
    </VStack>
  );
};

export default NoteItem;
