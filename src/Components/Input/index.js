import React from "react";
import { TextField, InputAdornment, TextareaAutosize } from "@material-ui/core";
import HelpOutlined from "@material-ui/icons/HelpOutlineOutlined";
import CheckBox from "@material-ui/icons/CheckBox";
import Error from "@material-ui/icons/Error";

export const Input = ({
  name,
  value,
  fullWidth = true,
  showIcon = true,
  isTextArea = false,
  errors,
  ...props
}) => {
  const Component = isTextArea ? TextareaAutosize : TextField;
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
  const ComponentProps = isTextArea
    ? {
        minRows: 7,
        maxRows: 7,
      }
    : {
        fullWidth,
        InputProps: value.length > 0 ? InputProps : null,
        size: "small",
        variant: "outlined",
      };

  return (
    <>
      {showIcon && <HelpOutlined style={{ marginRight: "0.5rem" }} />}
      <Component name={name} {...ComponentProps} {...props} />
    </>
  );
};

//export default Input;
