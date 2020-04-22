import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()};
`;
