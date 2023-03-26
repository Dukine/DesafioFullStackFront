import { StyledHeader } from "./styles";

import { ReactNode } from "react";

interface iHeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: iHeaderProps) => (
  <StyledHeader>
    <h2>
      Contact <span>ME</span>
    </h2>
    {children && <div>{children}</div>}
  </StyledHeader>
);

export default Header;
