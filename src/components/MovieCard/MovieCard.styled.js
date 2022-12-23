import styled from 'styled-components';

export const Item = styled.li`
  border-radius: ${p => p.theme.radii.primary};
  box-shadow: ${p => p.theme.shadows.primary};
  overflow: hidden;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

export const Title = styled.p`
  display: inline-block;
  font-size: ${p => p.theme.fontSizes.title};
  font-weight: bold;
`;

export const Votes = styled.p`
  display: inline-block;
  margin-left: auto;
  padding-left: ${p => p.theme.space[4]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-top: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.title};
  font-weight: bold;
  color: white;
  border-radius: ${p => p.theme.radii.primary};
  background-color: ${p => p.theme.colors.bgDark};
`;
