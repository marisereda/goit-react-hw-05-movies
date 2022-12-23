import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: ${p => p.theme.sizes.form};
  /* margin-bottom: ${p => p.theme.space[5]}px;

  margin-top: ${p => p.theme.space[5]}px; */
  /* padding: ${p => p.theme.space[5]}px; */

  /* background-color: ${p => p.theme.colors.bgDark}; */
  border-radius: ${p => p.theme.radii.primary};
  border: ${p => p.theme.borders.primary};
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: ${p => p.theme.sizes.buttonIcon};
  height: ${p => p.theme.sizes.buttonIcon};
  border: 0;
  color: white;
  background-repeat: no-repeat;
  background-position: center;
  background-color: ${p => p.theme.colors.bgDark};

  /* opacity: ${p => p.theme.styles.opacity};
  transition: opacity ${p => p.theme.styles.transition}; */
  cursor: pointer;
  outline: none;

  :hover {
    /* opacity: 1; */
  }
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: ${p => p.theme.space[3]}px;
  /* padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px; */
  font: inherit;
  font-size: ${p => p.theme.fontSizes.input};
  border: none;
  outline: none;
`;
