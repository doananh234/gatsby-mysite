import styled from 'styled-components';
import theme from '../../../../config/theme';

export const Wrapper = styled.div`
  text-align: center;
  padding: 1rem;
  background: ${({ themeType }) => theme[themeType].background.container};
  color: ${({ themeType }) => theme[themeType].text[0]};
`;

export const Links = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Item = styled.img`
  margin: 0 0.2rem;

  ${({ img }) => img
    && `
position: relative;
top: .15rem;
`};
`;
