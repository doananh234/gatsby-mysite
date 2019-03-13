import styled from 'styled-components';
import theme from '../../../config/theme';

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 36px;
  font-weight: 800;
  @media (max-width: 960px) {
  }
  color: ${({ themeType }) => theme[themeType].text[0]};
`;
