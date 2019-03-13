import styled from 'styled-components';
import theme from '../../../config/theme';

export const StyledSubtitle = styled.h2`
  margin-bottom: 2rem;
  transition: 0.3s;

  ${({ active }) => active
    && `
opacity: .3;
transition: .3s;
`};
  color: ${({ themeType }) => theme[themeType].text[0]};
`;
