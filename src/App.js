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
  requiredFields: {
    color: "red",
  },
  disabledInput: {
    background: "#ececec",
  },

  gridFlex: {
    display: "flex",
    alignItems: "center",
    marginTop: "0.5rem",
  },
});

function App(props) {
  const { classes } = props;
  const [inputs, setInputs] = useState({
    select: "Aperitif",
  });
  const [errors, setErrors] = useState({});
  const REQUIRED_INPUTS = ["type", "vintage", "color", "style"];

  function handleValidation(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    if (!value.match(/^[a-zA-Z]*$/)) {
      setErrors({
        ...errors,
        [name]: true,
      });
    } else {
      const newState = { ...errors, [name]: false };
      delete newState[name];
      setErrors(newState);
    }
  }

  const onSubmit = () => {
    const failedInputs = REQUIRED_INPUTS.filter(
      (requiredInput) => !inputs[requiredInput]
    );

    if (failedInputs.length > 0) {
      return alert(`Required input ${failedInputs[0]} must not be empty`);
    }

    const errorKeys = Object.keys(errors);

    if (errorKeys.length > 0) {
      return alert(`Input ${errorKeys[0]} has invalid characters  `);
    }

    alert("Submit Form to Firebase!");
  };

  const names = ["Aperitif", "Option 2", "Other"];
  let total = Object.values(inputs).filter((item) => item !== "").length;

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h3">
              Listing Score: {inputs === null ? 0 : total}
            </Typography>
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
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the type of the wine?{" "}
              <span className={classes.requiredFields}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input
              name="type"
              required
              onChange={(e) => handleValidation(e)}
              value={inputs["type"] || ""}
              errors={errors}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the vintage?{" "}
              <span className={classes.requiredFields}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input
              name="vintage"
              onChange={(e) => handleValidation(e)}
              required
              value={inputs["vintage"] || ""}
              errors={errors}
              fullWidth={false}
              style={{ width: "23ch" }}
            />
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
            <Input
              name="specific"
              type="textarea"
              errors={errors}
              style={{ width: "70%" }}
              value={inputs["specific"] || ""}
              onChange={(e) => handleValidation(e)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What type of wine is this?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <Input
              name="select"
              type="select"
              value={inputs["select"]}
              style={{ minWidth: "23ch" }}
              SelectProps={{
                multiline: true,
                onChange: (val) => handleValidation(val),
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Input>

            <Input
              name="other"
              errors={errors}
              showIcon={false}
              value={inputs["other"] || ""}
              style={{ marginLeft: "50px" }}
              onChange={(e) => handleValidation(e)}
              disabled={inputs["select"] !== "Other"}
              className={
                inputs["select"] !== "Other" ? classes.disabledInput : null
              }
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
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the color of wine?{" "}
              <span className={classes.requiredFields}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input
              name={"color"}
              placeholder="Red, White, Rose, Orange"
              value={inputs["color"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the style?{" "}
              <span className={classes.requiredFields}>*</span>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input
              name={"style"}
              placeholder="Still, Sparkling"
              value={inputs["style"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the body?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input
              name={"body"}
              placeholder="Round, Spicy, High Tannin, Fruity, Savory"
              value={inputs["body"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              What is the aroma?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input
              name={"aroma"}
              value={inputs["aroma"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
            />
          </Grid>

          <Grid
            item
            xs={12}
            sm={6}
            className={`${classes.gridFlex} ${classes.indentation}`}
          >
            <Typography variant="subtitle1" className={classes.question}>
              Do you have any personal tasting notes?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} className={classes.gridFlex}>
            <Input
              name={"tasting"}
              value={inputs["tasting"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
            />
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
            <Button variant="contained" color="primary" onClick={onSubmit}>
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
