import React from "react";
import { TextField, InputAdornment, TextareaAutosize } from "@material-ui/core";
import HelpOutlined from "@material-ui/icons/HelpOutlineOutlined";
import CheckBox from "@material-ui/icons/CheckBox";

export const Input = ({
  fullWidth = true,
  showIcon = true,
  isTextArea = false,
  ...props
}) => {
  const Component = isTextArea ? TextareaAutosize : TextField;
  const ComponentProps = isTextArea
    ? { minRows: 7, maxRows: 7 }
    : {
        fullWidth,
        size: "small",
        variant: "outlined",
        InputProps: {
          endAdornment: (
            <InputAdornment position="end">
              <CheckBox style={{ color: "green" }} />
            </InputAdornment>
          ),
        },
      };

  return (
    <>
      {showIcon && <HelpOutlined style={{ marginRight: "0.5rem" }} />}
      <Component {...ComponentProps} {...props} />
    </>
  );
};

//export default Input;
