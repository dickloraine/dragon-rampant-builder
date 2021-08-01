import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import useOpen from 'hooks/useOpen';
import React, { useState } from 'react';
import { CustomDataElement } from 'store/types';

export interface CustomFormProps<T extends CustomDataElement> {
  open: boolean;
  handleClose: () => void;
  initialState: T;
  changeState: React.Dispatch<React.SetStateAction<T>>;
  handleAction: () => void;
  validateName: () => boolean;
}

export interface CustomizeListProps<T extends CustomDataElement> {
  data: { [name: string]: T };
  CustomForm: React.FC<CustomFormProps<T>>;
  emptyState: T;
  removeFunc: (name: string) => void;
  addFunc: (newState: T) => void;
}

function CustomizeList<T extends CustomDataElement>(props: CustomizeListProps<T>) {
  const { data, CustomForm, emptyState, removeFunc, addFunc } = props;
  const { open, handleOpen, handleClose } = useOpen(false);
  const [state, setstate] = useState(emptyState);
  const [originalName, setOriginalName] = useState('');

  const validateName = (): boolean =>
    state.name !== '' &&
    Object.keys(data).every((name) => name === originalName || name !== state.name);

  const handleAction = () => {
    if (state.name !== originalName) {
      removeFunc(originalName);
    }
    if (validateName()) {
      addFunc(state);
      handleClose();
    }
  };

  return (
    <List>
      {Object.keys(data).map((name) => (
        <ListItem id={name} key={name}>
          <ListItemIcon>
            <IconButton
              aria-label="Edit"
              onClick={() => {
                setstate(data[name]);
                setOriginalName(name);
                handleOpen();
              }}
            >
              <EditIcon color="primary" />
            </IconButton>
          </ListItemIcon>
          <ListItemText>{name}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              size="small"
              aria-label="Delete"
              onClick={() => removeFunc(name)}
            >
              <DeleteForeverIcon color="action" />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
      <ListItem id="add_fr" key="add_fr">
        <Button
          aria-label="Add"
          startIcon={<AddCircleIcon color="secondary" />}
          onClick={() => {
            setstate(emptyState);
            setOriginalName('');
            handleOpen();
          }}
        >
          Add new
        </Button>
      </ListItem>
      <CustomForm
        open={open}
        handleClose={handleClose}
        handleAction={handleAction}
        initialState={state}
        changeState={setstate}
        validateName={validateName}
      />
    </List>
  );
}

export default CustomizeList;
