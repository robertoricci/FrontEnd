import React from 'react';
import Proptypes from 'prop-types';

import { Wrapper } from './styles';

// import { Container } from './styles';

export default function DefaultLayout({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

DefaultLayout.prototype = {
  children: Proptypes.element.isRequired,
};
