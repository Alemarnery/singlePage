import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Paper,
  Grid,
  Box,
  Input,
  OutlinedInput,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.primary,
  },
});

function App(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom>
        Listing Score:10
      </Typography>

      <Grid container spacing={1}>
        {/* Primer Formulario */}
        <Grid item xs={12} sm={8} md={8}>
          <Paper className={classes.paper}>
            <FormControl className={classes.formControl} variant="outlined">
              <OutlinedInput />
              <FormHelperText id="component-helper-text">
                Some important helper text
              </FormHelperText>
            </FormControl>

            <FormControl>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input id="my-input" aria-describedby="my-helper-text" />
              <FormHelperText id="my-helper-text">
                We'll never share your email.
              </FormHelperText>
            </FormControl>
          </Paper>
        </Grid>

        {/* Segundo Formulario */}
        <Grid item xs={12} sm={12} md={12}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            Segundo Formulario
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
