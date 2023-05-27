import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { addSpell, removeSpell } from '../../../store/dataSlice';
import { RootState, Spell } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu';
import CustomizePanel from '../CustomizePanel';
import SpellsForm from './SpellsForm';
import { emptySpell, spellSchema } from './spellsSchemas';

function SpellsPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch = useAppDispatch();
  const customData = useAppSelector((state: RootState) => state.data.customData.spells);

  const removeFunc = (name: string) => dispatch(removeSpell(name));
  const addFunc = (spell: Spell) => dispatch(addSpell(spell));

  return (
    <CustomizePanel<Spell>
      name="Spells"
      id="spells"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={SpellsForm}
      schema={spellSchema}
      emptyState={{ ...emptySpell }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(SpellsPanel);
