import styled from "styled-components";

const Contacts = styled.div`
  padding: 0 20px;

  > div {
    display: flex;
    justify-content: space-between;
    padding: 25px 0;
  }

  > ul {
    background-color: var(--grey-3);
    border-radius: 4px;
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export default Contacts;
