import styled, { css } from "styled-components";

interface iButtonProps {
  medium?: boolean;
  variant?: boolean;
}

const Button = styled.button<iButtonProps>`
  border-radius: 4px;
  border: 2px solid;
  text-align: center;
  padding: ${({ medium }) => (medium ? `0.5rem` : `1rem`)};
  color: var(--grey-0);

  ${({ variant }) =>
    !variant
      ? css`
        background-color: var(--color-primary);
        border-color: var(--color-primary);
        &:hover {
        background-color: var(--color-primary-focus);
        border-color: var(--color-primary-focus);
        `
      : css`
        background-color: var(--grey-1);
        border-color: var(--grey-1);
        &:hover {
        background-color: var(--grey-2);
        border-color: var(--grey-2);
        `}
`;

export default Button;
