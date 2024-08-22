import React from 'react';
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
import Solver from './Solver';
import Map from './Map';
import About from './About';

const Nav: React.FunctionComponent = () => {
  return (
    <Pivot aria-label="Nav bar">
      <PivotItem
        headerText="Solver"
        headerButtonProps={{
          'data-order': 1,
          'data-title': 'Solver Title',
        }}
      >
        <Solver />
      </PivotItem>
      <PivotItem headerText="Map">
        <Map />
      </PivotItem>
      <PivotItem headerText="About">
        <About />
      </PivotItem>
    </Pivot>
  );
};

export default Nav;