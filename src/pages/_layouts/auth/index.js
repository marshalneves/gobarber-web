import React from 'react';

import { PropTypes } from 'prop-types';
import * as S from './styles';

export default function AuthLayout({ children }) {
  return <S.Wrapper>{children}</S.Wrapper>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
