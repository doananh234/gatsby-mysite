import styled from 'styled-components';
import theme from '../../../config/theme';

export const Wrapper = styled.div`
  padding: 1rem 0;
  margin-bottom: 7rem;
  text-align: center;

  h2,
  p {
    color: ${({ themeType }) => theme[themeType].text[0]};
  }
`;
