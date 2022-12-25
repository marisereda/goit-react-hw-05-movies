import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ImArrowLeft2 } from 'react-icons/im';

export const Image = styled.img`
  border-radius: ${p => p.theme.radii.textBlock};
  width: 500px;
  height: auto;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[5]}px;
  text-transform: uppercase;
  color: ${p => p.theme.colors.title}; ;
`;

export const SubTitle = styled.h3`
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.subTitle};
`;

export const Paragraph = styled.p`
  margin-bottom: ${p => p.theme.space[4]}px;
  color: ${p => p.theme.colors.subTitle};
  font-size: ${p => p.theme.fontSizes.text};
`;

export const Votes = styled.span`
  display: inline-block;
  margin-left: ${p => p.theme.space[4]}px;
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

export const Item = styled.li`
  margin-bottom: ${p => p.theme.space[4]}px;
  text-align: right;
`;

export const LinkBack = styled(NavLink)`
  display: block;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[3]}px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled(ImArrowLeft2)`
  width: ${p => p.theme.sizes.backIcon};
  height: ${p => p.theme.sizes.backIcon};
  color: ${p => p.theme.colors.bgDark};
`;
