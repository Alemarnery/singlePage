import React from "react";
import {
  TextField,
  InputAdornment,
  TextareaAutosize,
  Tooltip,
} from "@material-ui/core";
import HelpOutlined from "@material-ui/icons/HelpOutlineOutlined";
import CheckBox from "@material-ui/icons/CheckBox";
import Error from "@material-ui/icons/Error";

export const Input = ({
  name,
  value,
  errors,
  children = null,
  showIcon = true,
  fullWidth = true,
  type = "input", // input | textarea | select
  ...props
}) => {
  let Component = TextField;
  let ComponentProps;

  switch (type) {
    case "input":
      const showError = errors[name] ? true : null;

      const InputProps = {
        endAdornment: (
          <InputAdornment position="end">
            {errors[name] ? (
              <Error style={{ color: "red" }} />
            ) : (
              <CheckBox style={{ color: "green" }} />
            )}
          </InputAdornment>
        ),
      };

      ComponentProps = {
        fullWidth,
        size: "small",
        variant: "outlined",
        error: value.length > 0 ? showError : null,
        InputProps: value.length > 0 ? InputProps : null,
      };
      break;
    case "textarea":
      Component = TextareaAutosize;

      ComponentProps = {
        minRows: 7,
        maxRows: 7,
      };
      break;
    case "select":
      ComponentProps = {
        select: true,
        size: "small",
        variant: "outlined",
      };
      break;
    default:
    // Default Case
  }

  return (
    <>
      {showIcon && (
        <Tooltip arrow placement="left" title="Help">
          <HelpOutlined style={{ marginRight: "0.5rem" }} />
        </Tooltip>
      )}
      <Component name={name} value={value} {...ComponentProps} {...props}>
        {children}
      </Component>
    </>
  );
};
