import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import {
  FormContainer,
  SelectElement,
  TextFieldElement,
} from '../../../libs/react-hook-form-mui';
import { Spell } from '../../../store/types';
import range from '../../../utils/range';
import { CustomFormProps } from '../common/useCustomizeForm';

function SpellsForm(props: CustomFormProps<Spell>) {
  const { formContext, open, handleClose, handleAction } = props;

  return (
    <Dialog open={open}>
      <FormContainer formContext={formContext} onSuccess={handleAction}>
        <DialogTitle>Spell</DialogTitle>
        <DialogContent>
          <TextFieldElement
            name="name"
            label="Name"
            type="text"
            required
            margin="normal"
            fullWidth
          />
          <SelectElement
            name="difficulty"
            label="Difficulty"
            type="number"
            margin="normal"
            fullWidth
            options={range(2, 12)}
          />
          <TextFieldElement
            name="target"
            label="Target"
            type="text"
            required
            margin="normal"
            fullWidth
          />
          <TextFieldElement
            name="duration"
            label="Duration"
            type="text"
            required
            margin="normal"
            fullWidth
          />
          <TextFieldElement
            name="effect"
            label="Effekt"
            type="text"
            required
            margin="normal"
            fullWidth
            multiline
          />
          <TextFieldElement
            name="short"
            label="Short description"
            type="text"
            margin="normal"
            fullWidth
            multiline
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button type="submit" color="primary">
            Okay
          </Button>
        </DialogActions>
      </FormContainer>
    </Dialog>
  );
}

export default SpellsForm;
