import React from "react";

import { GroupContainer, FormInputContainer, FormInputLabel } from "./styles";

type Props = {
  handleChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  label: string;
};

const FormInput = ({
  handleChange,
  label,
  ...props
}: Props & React.InputHTMLAttributes<HTMLInputElement>) => (
  <GroupContainer>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel
        className={(props.value as string).length ? "shrink" : ""}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </GroupContainer>
);

export default FormInput;
