import styled from 'styled-components';

export const FeedbackItem = styled.li`
  border: none;
  background-color: transparent;

  &:nth-child(1) button {
    border-color: var(--green-color);
  }

  &:nth-child(1) button:is(:hover, :focus) {
    background-color: var(--green-color);
  }

  &:nth-child(2) button {
    border-color: var(--yellow-color);
  }

  &:nth-child(2) button:is(:hover, :focus) {
    color: currentColor;
    background-color: var(--yellow-color);
  }

  &:nth-child(3) button {
    border-color: var(--red-color);
  }

  &:nth-child(3) button:is(:hover, :focus) {
    background-color: var(--red-color);
  }
`;

export const FeedbackButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  min-width: 120px;
  border-radius: 18px;
  border: 2px solid black;
  padding: 8px;

  text-transform: capitalize;

  color: currentColor;
  background-color: transparent;

  transition: color var(--transition-duration) var(--transition-timing-function),
    background-color var(--transition-duration)
      var(--transition-timing-function);

  &:is(:hover, :focus) {
    color: var(--white-color);
  }

  @media screen and (max-width: 767px) {
    min-width: 70px;
  }

  & svg {
    stroke-width: 0.3;

    overflow: visible;
  }
`;
