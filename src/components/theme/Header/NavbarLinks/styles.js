import styled from 'styled-components';
import theme from '../../../../config/theme';

export const Links = styled.div`
  a {
    color: ${({ themeType }) => theme[themeType].text[5]};
    text-decoration: none;

    &.current {
      font-weight: bold;
      color: ${({ themeType }) => theme[themeType].text[0]};
    }
  }

  ${({ desktop }) => desktop
      ? `
        @media (max-width: 960px) {
            display: none;
        }

        a {
            margin-right: 1rem;

            &:last-child {
                margin-right: unset;
            }
        }
    `
      : `
        padding: 3rem;
        display: flex;
        flex-direction: column;

        a {
            margin-bottom: 1rem;

            &:last-child {
                margin-bottom: unset;
            }
        }
    `}
`;

export const StyledButton = styled.button`
  cursor: pointer;
  border: none;
  position: relative;
  top: 0.3rem;
  background: none;
  text-align: left;

  img {
    margin: 0;
  }
`;
