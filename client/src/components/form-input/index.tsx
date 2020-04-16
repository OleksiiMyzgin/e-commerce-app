import React from "react";

import "./form-input.styles.scss";

type Props = {
  handleChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  label: string;
};

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}: Props & React.AllHTMLAttributes<HTMLInputElement>) => (
  <div className="group">
    <input
      type=""
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        htmlFor={label}
        className={`${
          (otherProps.value as string).length ? "shrink" : ""
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
