import styled from "styled-components";

const StyledContactCard = styled.li`
  max-width: 100%;
  background-color: var(--grey-1);
  border-radius: 4px;
  /* padding: 1rem; */
  display: flex;
  color: var(--grey-0);

  .contact-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;

    > h4 {
      display: flex;
      justify-content: center;
    }

    > span {
      margin-left: 1rem;
    }
  }
  .contact-buttons {
    min-height: 100%;
    display: flex;

    > button {
      background-color: var(--grey-2);
      border-color: var(--grey-1);
      border-radius: 4px;
      height: 100%;

      &:hover {
        background-color: var(--grey-1);
        border-color: var(--grey-2);
      }
    }
  }

  &:hover {
    background-color: var(--grey-2);
  }
`;

export default StyledContactCard;
