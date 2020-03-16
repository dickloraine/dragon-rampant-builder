import React from 'react';
import { Typography, List, Container, ListItem } from '@material-ui/core';

export default function SpecialRules({ rules }) {
  if (rules && rules.length) {
    return (
      <Container>
        <Typography variant="h6" style={{ marginTop: 10 }}>
          Special Rules
        </Typography>
        <List>
          {rules.map(r => (
            <ListItem key={r}>{r}</ListItem>
          ))}
        </List>
      </Container>
    );
  }
  return <div></div>;
}
