import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  TextField,
  Typography,
  FormHelperText,
  Box,
  TextareaAutosize,
  Select,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      //width: "25ch",
    },
  },
  question: {
    fontSize: 18,
  },
  divider: {
    margin: `${theme.spacing.unit * 2}px 0`,
  },
  textarea: {
    width: "70%",
  },
  textStyle: {
    display: "flex",
    alignItems: "center",
  },
});

function App(props) {
  const { classes } = props;

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">Listing Score: 10</Typography>
            <Typography variant="h4">Tell us a bit about your wine</Typography>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.textStyle}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the type of the wine?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField required fullWidth variant="outlined" size="small" />
            <FormHelperText>Some important helper text</FormHelperText>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.textStyle}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the vintage?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextField required variant="outlined" />
          </Grid>

          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" className={classes.question}>
              Any note specific for this vintage?
            </Typography>
            <Typography variant="subtitle1">
              Examples: Weather, special circumstances, significant or
              interesting changes made between the vintage and previus
              vintage(s)?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5}>
            <TextareaAutosize
              minRows={7}
              maxRows={7}
              className={classes.textarea}
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.textStyle}>
            <Typography variant="subtitle1" className={classes.question}>
              What type of wine is this?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} style={{ display: "flex" }}>
            <Select native variant="outlined" style={{ minWidth: "23ch" }}>
              <option value="Aperitif">Aperitif</option>
              <option value={2}>Option 2</option>
              <option value={4}>Other</option>
            </Select>
            <TextField
              required
              fullWidth
              variant="outlined"
              style={{ marginLeft: "50px" }}
            />
          </Grid>
        </Grid>

        {/* Segundo Formulario */}
        <Grid container>
          <Grid item xs={12}>
            <Box bgcolor="primary.main" color="primary.contrastText" p={2}>
              Segundo Formulario
            </Box>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
