import styled from "styled-components";

export const StyledRegister = styled.div`
  width: 90vw;
  max-width: 350px;
  margin: 20px auto 0 auto;
  background-color: var(--grey-3);
  box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  > button {
    width: 100%;
  }

  > a {
    width: 100%;
  }

  select {
    background-color: var(--grey-2);
    border: 1.2px solid var(--grey-2);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    color: var(--grey-0);
    outline: none;

    &:hover {
      border: 1.2px solid var(--grey-0);
    }

    &:focus {
      border: 1.2px solid var(--grey-0);
    }
  }
`;
