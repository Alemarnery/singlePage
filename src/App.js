import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Container,
  TextField,
  Typography,
  Button,
  MenuItem,
} from "@material-ui/core";
import HelpOutlined from "@material-ui/icons/HelpOutlineOutlined";
import { withStyles } from "@material-ui/core/styles";
import { Input } from "./Components/Input";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  gridContainer: {
    marginTop: "2rem",
  },
  indentation: {
    paddingLeft: "30px",
  },
  question: {
    fontSize: 16,
  },

  gridFlex: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
});

function App(props) {
  const { classes } = props;
  const [selectValue, setSelectValue] = useState(null);

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

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the type of the wine?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input required error />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the vintage?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input required error fullWidth={false} />
          </Grid>

          <Grid item xs={12} sm={6} className={classes.indentation}>
            <Typography variant="subtitle1" className={classes.question}>
              Any note specific for this vintage?
            </Typography>
            <Typography variant="subtitle1">
              Examples: Weather, special circumstances, significant or
              interesting changes made between the vintage and previus
              vintage(s)?s
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input style={{ width: "70%" }} isTextArea />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
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
                onChange: (val) => setSelectValue(val.target.value),
                multiline: true,
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <Input
              showIcon={false}
              disabled={selectValue !== "Other"}
              style={{ marginLeft: "50px" }}
            />
          </Grid>
        </Grid>

        {/* Segundo Formulario */}
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12}>
            <Typography variant="h4">Colour & Body</Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the color of wine?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input required placeholder="Red, White, Rose, Orange" error />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the style?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input required placeholder="Still, Sparkling" error />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the body?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input placeholder="Round, Spicy, High Tannin, Fruity, Savory" />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the aroma?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={[classes.gridFlex, classes.indentation]}
          >
            <Typography variant="subtitle1" className={classes.question}>
              Do you have any personal tasting notes?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input />
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
