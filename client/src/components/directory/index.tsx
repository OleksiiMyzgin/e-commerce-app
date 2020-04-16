import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { RootState, Sections } from "../../interfaces";

import { selectDirectorySections } from "../../redux/directory/selectors";

import MenuItem from "../menu-item";

import { DirectoryMenuContainer } from "./styles";

type Props = {
  sections: Sections[];
};

const Directory = ({ sections }: Props) => (
  <DirectoryMenuContainer>
    {sections.map((section) => (
      <MenuItem key={section.id} {...section} />
    ))}
  </DirectoryMenuContainer>
);

type Selector = {
  sections: ReturnType<typeof selectDirectorySections>;
};

const mapStateToProps = createStructuredSelector<RootState, Selector>({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
