import styled from 'styled-components';

export const FeedbackItem = styled.li`
  border: none;
  background-color: transparent;

  &:nth-child(1) button {
    border-color: green;
  }

  &:nth-child(1) button:is(:hover, :focus) {
    background-color: green;
  }

  &:nth-child(2) button {
    border-color: #f0f037;
  }

  &:nth-child(2) button:is(:hover, :focus) {
    color: currentColor;
    background-color: #f0f037;
  }

  &:nth-child(3) button {
    border-color: red;
  }

  &:nth-child(3) button:is(:hover, :focus) {
    background-color: red;
  }
`;

export const FeedbackButton = styled.button`
  min-width: 100px;
  border-radius: 18px;
  border: 2px solid black;
  padding: 8px;

  text-transform: capitalize;

  color: currentColor;
  background-color: transparent;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:is(:hover, :focus) {
    color: #fff;
  }
`;
