import styled from 'styled-components';

const TitleSection = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.space[1]};
  padding: ${({ theme }) =>
    `${theme.space[9]} ${theme.space[10]} ${theme.space[7]} ${theme.space[10]}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.grays[500]};
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grays[300]};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 22px;
  line-height: 27px;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.grays[200]};
  font-size: 14px;
  line-height: 22px;
`;

const EmployeeFormTitle = ({ title, description }) => (
  <TitleSection>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </TitleSection>
);

export default EmployeeFormTitle;