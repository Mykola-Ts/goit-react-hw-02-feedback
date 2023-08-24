import styled from 'styled-components';

export const FeedbackButtonList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 28px;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }
`;
