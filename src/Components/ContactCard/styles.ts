import styled from "styled-components";

const StyledContactCard = styled.li`
  max-width: 100%;
  background-color: var(--grey-1);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  color: var(--grey-0);

  .contact-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > h4 {
      display: flex;
      justify-content: center;
    }

    > span {
      margin-left: 1rem;
    }
  }

  &:hover {
    background-color: var(--grey-2);
  }
`;

export default StyledContactCard;
