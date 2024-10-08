import React, { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
  Textarea,
} from '@chakra-ui/react';

const EditNoteModal = ({ isOpen, onClose, note, onUpdate }) => {
  const [updatedNote, setUpdatedNote] = useState({
    title: note.title,
    content: note.content,
  });

  const handleSave = () => {
    onUpdate(note._id, updatedNote); // Call onUpdate function passed from the parent
    onClose(); // Close the modal after saving
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Note</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="Title"
            value={updatedNote.title}
            onChange={(e) => setUpdatedNote({ ...updatedNote, title: e.target.value })}
            mb={4}
          />
          <Textarea
            placeholder="Content"
            value={updatedNote.content}
            onChange={(e) => setUpdatedNote({ ...updatedNote, content: e.target.value })}
          />
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleSave}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditNoteModal;
