import styled, { keyframes } from "styled-components";

interface iModalProps {
  isLeaving: boolean;
}

const entering = keyframes`
  0% {
    color: transparent;
    transform: translateY(-30px);
    filter: opacity(0);
  }
  100% {
    transform: translateY(0px);
    filter: opacity(1);
  }
  `;

const leaving = keyframes`
0% {
  transform: translateY(0px);
  filter: opacity(1);
}
100% {
  color: transparent;
  transform: translateY(30px);
  filter: opacity(0);
}
`;

export const Modal = styled.div<iModalProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 101;
  background-color: rgba(18, 18, 20, 0.5);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;

  .content {
    width: 100%;
    background-color: var(--grey-2);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    animation: ${({ isLeaving }) => (isLeaving ? leaving : entering)} 1000ms;
    animation-fill-mode: forwards;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
    }

    form {
      background-color: var(--grey-3);
      padding: 1rem;
    }

    .options {
      justify-content: space-around;

      button {
        width: 40%;
      }
    }
  }

  @media (min-width: 400px) {
    .content {
      max-width: 400px;
    }
  }
`;
