import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  span {
    color: var(--negative);
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

export default Form;
