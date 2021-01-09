import React from 'react';
import Typography from '@material-ui/core/Typography';
import MuiLink from '@material-ui/core/Link';

export default function Copyright() {
  return (
    <div>
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Scott Anderson
      </MuiLink>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
    </div>
  );
}
