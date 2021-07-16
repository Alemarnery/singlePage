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
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  function handleValidation(e) {
    console.log(e);
    const { value, name } = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    });

    if (!value.match(/^[a-zA-Z]+$/)) {
      setErrors({
        ...errors,
        [name]: true,
      });
    } else {
      setErrors({
        ...errors,
        [name]: false,
      });
    }
  }

  const onSubmit = () => {
    //Si la variable errores existe, debo decir que inputs estan mal escritos.
    //En caso contrario hacer el envio de los datos

    alert("Si hay errores debo decirlo");
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
              What is the type of the wine? *
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
              What is the vintage? *
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
              style={{ width: "70%" }}
              isTextArea
              value={inputs["specific"] || ""}
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
              What type of wine is this?
            </Typography>
          </Grid>
          <Grid item xs={12} sm={5} className={classes.gridFlex}>
            <HelpOutlined style={{ marginRight: "0.5rem" }} />
            <TextField
              name="select"
              size="small"
              variant="outlined"
              style={{ minWidth: "23ch" }}
              select
              SelectProps={{
                //onChange: (val) => setSelectValue(val.target.value),
                onChange: (val) => handleValidation(val),
                multiline: true,
              }}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </TextField>

            <select>
              <option>opcion 1</option>
            </select>

            <Input
              name="other"
              showIcon={false}
              disabled={selectValue !== "Other"}
              style={{ marginLeft: "50px" }}
              value={inputs["other"] || ""}
              errors={errors}
              onChange={(e) => handleValidation(e)}
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
              What is the color of wine? *
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
              What is the style? *
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
