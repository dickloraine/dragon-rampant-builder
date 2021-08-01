import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showFeedback } from 'store/appStateSlice';
import { addFantasticalRule, removeFantasticalRule } from 'store/dataSlice';
import { AppDispatch, FantasticalRule, RootState } from 'store/types';
import { PanelProps } from './CustomizeMenu';
import CustomizePanel from './CustomizePanel';
import FantasticalRulesForm from './FantasticalRulesForm';

function FantasticalRulesPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch: AppDispatch = useDispatch();
  const customData = useSelector(
    (state: RootState) => state.data.customData.fantasticalRulesData
  );
  const units = useSelector((state: RootState) => state.roster.units);

  const removeFunc = (name: string) => {
    if (Object.values(units).some((unit) => unit.fantasticalRules.includes(name))) {
      dispatch(showFeedback(`You can't delete a rule currently in use!`, 'error'));
    } else dispatch(removeFantasticalRule(name));
  };
  const addFunc = (rule: FantasticalRule) => dispatch(addFantasticalRule(rule));

  return (
    <CustomizePanel<FantasticalRule>
      name="fantastical Rules"
      id="fantastical-rules"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={FantasticalRulesForm}
      emptyState={{
        name: 'Name',
        points: 0,
        exclude_units: ['Ravenous Hordes'],
        description: 'Description',
      }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(FantasticalRulesPanel);
