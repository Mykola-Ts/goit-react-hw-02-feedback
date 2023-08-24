import styled from 'styled-components';

export const ListItem = styled.li`
  display: block;

  width: calc((100% - 48px) / 3);

  text-align: center;
  font-weight: 700;

  &:last-child,
  &:nth-last-child(2) {
    width: 100%;

    font-size: 18px;
    line-height: 1.33;
    letter-spacing: -0.18px;
    text-transform: uppercase;
  }
`;

export const ListItemValue = styled.span`
  font-weight: 400;
`;
