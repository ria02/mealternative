import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

const Header = props => {
  const { classes, isAuthenticated, history } = props;

  const handleRouteChange = name => {
    history.push(`/${name}`);
  };

  return (
    <AppBar position='fixed'>
      <Toolbar disableGutters className={classes.menuBarLayout}>
        <IconButton>
          <Menu style={{ color: '#eceff4' }} />
        </IconButton>
        {isAuthenticated ? null : (
          <div>
            <Button
              onClick={() => handleRouteChange('signin')}
              style={{ color: '#eceff4' }}
            >
              Sign In
            </Button>
            <Button
              onClick={() => handleRouteChange('signup')}
              style={{ color: '#eceff4' }}
            >
              Sign Up
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

export default withRouter(Header);
