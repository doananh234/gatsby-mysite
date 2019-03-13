import styled from 'styled-components';
import theme from '../../../config/theme';

export const PostWrapper = styled.div`
  .post {
    &__footer {
      margin: 0 auto;
    }

    &__home-button {
      display: block;
      max-width: 90px;
      padding: 0 24px;
      text-align: center;
      font-weight: normal;
      margin-left: auto;
      margin-right: auto;

      &:hover,
      &:focus {
      }
    }
  }
`;

export const ArticleWrapper = styled.div`
  a {
    text-decoration: none;
    color: rgb(0, 119, 255);
  }

  i {
    color: #a7a7a7;
  }

  h1 {
    font-family: 'Merriweather', serif;
    text-align: center;
  }
  color: ${({ themeType }) => theme[themeType].text[0]};
`;

export const Back = styled.div`
  margin-top: 2rem;
  margin-left: 10%;
`;

export const Content = styled.div`
  font-size: 1.2rem;
  line-height: 2rem;
`;

export const Comments = styled.div`
  margin-top: 2rem;
`;

export const ArticleDate = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: -1rem;
  margin-bottom: 1rem;

  i {
    font-size: 0.9em;

    &:first-child {
      margin-right: 0.2rem;
    }
  }
`;
