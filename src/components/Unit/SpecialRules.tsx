import { Container, List, ListItem, Typography } from '@material-ui/core';
import React from 'react';

const SpecialRules: React.FC<{ rules: string[] }> = ({ rules }) => {
  if (rules && rules.length) {
    return (
      <Container>
        <Typography variant="h6">Special Rules</Typography>
        <List>
          {rules.map((r) => (
            <ListItem key={r}>{r}</ListItem>
          ))}
        </List>
      </Container>
    );
  }
  return <></>;
};

export default SpecialRules;
