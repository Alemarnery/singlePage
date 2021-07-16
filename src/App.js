import React from "react";
import PropTypes from "prop-types";
import {
  Container,
  Typography,
  Grid,
  Box,
  OutlinedInput,
  FormControl,
  InputLabel,
  TextareaAutosize,
  TextField,
  Select,
  MenuItem,
  FormHelperText,
  ListSubheader,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  root: {
    flexGrow: 1,
  },
  textarea: {
    width: "70%",
  },
});

function App(props) {
  const { classes } = props;
  console.log(classes);

  return (
    <Container fixed>
      <Typography variant="h3" gutterBottom>
        Listing Score:10
      </Typography>
      <Typography variant="h6" gutterBottom>
        Tell us a bit about your wine
      </Typography>

      {/* Primer Formulario */}
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            What is the type of the wine?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth={true}
              required
              error
            />
            <FormHelperText>Some important helper text</FormHelperText>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            What is the vintage?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <TextField
              id="outlined-basic"
              variant="outlined"
              //fullWidth={true}
              required
              //error
            />
            <FormHelperText>Some important helper text</FormHelperText>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            Any note specific for this vintage?
          </Typography>
          <Typography variant="subtitle2" gutterBottom>
            Examples: Weather, special circumstances, significant or interesting
            changes made between the vintage and previus vintage(s)?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <div>
            <TextareaAutosize
              minRows={5}
              maxRows={10}
              className={classes.textarea}
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <Typography variant="subtitle1" gutterBottom>
            What type of wine is this?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <FormControl className={classes.formControl}>
            <Select native variant="outlined" autoWidth={true}>
              <option value="Aperitif">Aperitif</option>
              <option value={2}>Option 2</option>
              <option value={4}>Other</option>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <OutlinedInput />
            <FormHelperText>Some important helper text</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

      {/* Segundo Formulario */}
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12} md={12}>
          <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
            Segundo Formulario
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
