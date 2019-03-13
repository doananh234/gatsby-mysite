import styled from 'styled-components';

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: 36px;
  font-weight: 800;
  @media (max-width: 960px) {
  }

  ${({ theme }) => theme === 'dark' && 'color: #fff;'};
`;
