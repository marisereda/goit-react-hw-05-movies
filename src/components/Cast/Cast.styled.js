import styled from 'styled-components';

export const Image = styled.img`
  object-fit: cover;
`;

export const ImageWrap = styled.div`
  width: 300px;
  height: 450px;
  background-color: ${p => p.theme.colors.bgMain};
  border-radius: ${p => p.theme.radii.textBlock};
  margin-bottom: ${p => p.theme.space[3]}px;
  overflow: hidden;
`;
