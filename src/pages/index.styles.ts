import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export const StyledLoginLogo = styled.div`
  border: 1px solid #000;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledSelectRegion = styled(IconButton)`
  margin-right: 20px;
`;

export const SplitLine = styled.div`
  padding: 10px;
  width: 100%;
  border-bottom: 1px solid;
  overflow: hidden;
`;
