import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import { showFeedback } from '../../../store/appStateSlice';
import { addFantasticalRule, removeFantasticalRule } from '../../../store/dataSlice';
import { FantasticalRule, RootState } from '../../../store/types';
import { PanelProps } from '../CustomizeMenu/CustomizeMenu';
import CustomizePanel from '../CustomizePanel/CustomizePanel';
import FantasticalRulesForm from './FantasticalRulesForm';
import { emptyFantasticalRule, fantasticalRuleSchema } from './fantasticalRulesSchemas';

function FantasticalRulesPanel(props: PanelProps) {
  const { expanded, handleChange } = props;
  const dispatch = useAppDispatch();
  const customData = useAppSelector(
    (state: RootState) => state.data.customData.fantasticalRulesData
  );
  const units = useAppSelector((state: RootState) => state.roster.units);

  const removeFunc = (name: string) => {
    if (Object.values(units).some((unit) => unit.fantasticalRules.includes(name))) {
      dispatch(showFeedback(`You can't delete a rule currently in use!`, 'error'));
    } else dispatch(removeFantasticalRule(name));
  };
  const addFunc = (rule: FantasticalRule) => dispatch(addFantasticalRule(rule));

  return (
    <CustomizePanel<FantasticalRule>
      name="Fantastical Rules"
      id="fantastical-rules"
      expanded={expanded}
      handleChange={handleChange}
      data={customData}
      CustomForm={FantasticalRulesForm}
      schema={fantasticalRuleSchema}
      emptyState={{ ...emptyFantasticalRule }}
      removeFunc={removeFunc}
      addFunc={addFunc}
    />
  );
}

export default React.memo(FantasticalRulesPanel);
