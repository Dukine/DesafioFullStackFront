import styled from "styled-components";

const Input = styled.input`
  background-color: var(--grey-2);
  border: 1.2px solid var(--grey-2);
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: var(--grey-0);
  outline: none;

  ::placeholder {
    color: var(--grey-0);
  }

  &:hover {
    border: 1.2px solid var(--grey-0);
  }

  &:focus {
    border: 1.2px solid var(--grey-0);
  }
`;

export default Input;
