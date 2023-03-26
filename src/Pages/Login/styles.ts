import styled from "styled-components";

export const StyledLogin = styled.div`
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
`;
