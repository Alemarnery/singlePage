import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  TextField,
  Typography,
  TextareaAutosize,
  FormHelperText,
  Button,
  MenuItem,
} from "@material-ui/core";
import HelpOutlined from "@material-ui/icons/HelpOutlineOutlined";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    marginTop: "2rem",
  },
  question: {
    fontSize: 16,
  },
  textarea: {
    width: "70%",
  },
  gridFlex: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
});

function App(props) {
  const { classes } = props;

  const names = ["Aperitif", "Option 2", "Other"];

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">Listing Score: 10</Typography>
          </Grid>
        </Grid>

        {/* Primer Formulario */}
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="h4">Tell us a bit about your wine</Typography>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the type of the wine?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              required
              fullWidth
              variant="outlined"
              size="small"
              //helperText="Some important text"
              error
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the vintage?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField required variant="outlined" size="small" error />
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
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextareaAutosize
              minRows={7}
              maxRows={7}
              className={classes.textarea}
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What type of wine is this?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              size="small"
              variant="outlined"
              style={{ minWidth: "23ch" }}
              select
              SelectProps={{
                // value: personName,
                // onChange: handleChange,
                multiline: true,
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              size="small"
              required
              fullWidth
              variant="outlined"
              style={{ marginLeft: "50px" }}
            />
          </Grid>
        </Grid>

        {/* Segundo Formulario */}
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="h4">Colour & Body</Typography>
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the color of wine?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Red,White,Rose,Orange"
              size="small"
              error
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the style?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              required
              fullWidth
              variant="outlined"
              placeholder="Still,Sparkling"
              size="small"
              error
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the body?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Round, Spicy, High Tannin, Fruity, Savory"
              size="small"
            />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              What is the aroma?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField fullWidth variant="outlined" size="small" />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Typography variant="subtitle1" className={classes.question}>
              Do you have any personal tasting notes?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField fullWidth variant="outlined" size="small" />
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "2rem",
            }}
          >
            <Button variant="contained" color="primary">
              Primary
            </Button>
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
