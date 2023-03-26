import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  padding: 32px 16px;
  background-color: var(--grey-3);

  h2 {
    color: var(--color-primary);

    > span {
      color: var(--color-primary-focus);
    }
  }

  > div {
    margin-left: auto;
  }
`;
