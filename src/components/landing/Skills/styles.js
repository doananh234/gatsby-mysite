import styled from 'styled-components';
import { palette, key } from 'styled-theme';

export const Wrapper = styled.div`
  margin-bottom: 1.45rem;
  color: #212121;
  padding: 8rem 1rem 7rem 1rem;
  clip-path: polygon(0% 14%, 100% 0, 100% 84%, 0 100%);
  background: ${palette('grayscale', 6)};
  text-align: center;
  color: ${theme => key([theme.themeType, 'text', 0])(theme)};
  background: ${theme => key([theme.themeType, 'background', 0])(theme)};
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 2rem 0;
  max-width: 960px;
  margin: 0 auto;

  @media (max-width: 680px) {
    flex-direction: column;
  }
`;

export const Tech = styled.div`
  text-align: left;

  a {
    color: #212121;
    text-decoration: underline;
    color: ${theme => key([theme.themeType, 'text', 0])(theme)};
  }
`;
