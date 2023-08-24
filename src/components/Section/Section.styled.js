import styled from 'styled-components';

export const Wrapper = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 28px;

  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.96px;
  text-transform: uppercase;
  text-align: center;
`;
