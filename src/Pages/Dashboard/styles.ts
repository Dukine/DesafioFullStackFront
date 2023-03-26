import styled from "styled-components";

export const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;

  .div--greetings {
    border: solid var(--grey-3);
    border-width: 0 1px 1px 1px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 10px;
  }
`;
