import { Link } from "react-router-dom";
import styled from "styled-components";

interface iStyledLinkProps {
  medium?: boolean;
}

const StyledLink = styled(Link)<iStyledLinkProps>`
  border-radius: 4px;
  border: 2px solid;
  text-align: center;
  text-decoration: none;
  padding: ${({ medium }) => (medium ? `0.5rem` : `1rem`)};
  color: var(--grey-0);

  background-color: var(--grey-1);
  border-color: var(--grey-1);
  &:hover {
    background-color: var(--grey-2);
    border-color: var(--grey-2);
  }
`;

export default StyledLink;
