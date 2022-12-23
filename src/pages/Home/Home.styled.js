import styled from 'styled-components';

export const PageTitle = styled.h1`
  display: block;
  padding: ${p => p.theme.space[6]}px;
  text-align: center;
  text-transform: uppercase;
  color: ${p => p.theme.colors.title};
`;
