import React from 'react';

import { CutomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CutomButtonContainer {...props}>{children}</CutomButtonContainer>
);

export default CustomButton;
