import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '@/components/Elements/Button';
import { UserIcon } from '@/icons/index';

const Container = styled.div`
  align-items: center;
  margin: ${({ theme }) => `${theme.space[12]} auto ${theme.space[13]} auto`};
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.grays[300]};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 26px;
  line-height: 31px;
  margin-right: ${({ theme }) => theme.space[2]};
`;

const EmployeesCount = styled.span`
  color: ${({ theme }) => theme.colors.grays[100]};
  display: inline-block;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: 13px;
  line-height: 16px;
`;

const ListTitle = ({ employeesCount }) => (
  <Container>
    <div>
      <Title>People</Title>
      <EmployeesCount>{employeesCount} employees</EmployeesCount>
    </div>
    <Link href="/employee" passHref>
      <Button as="a">
        <UserIcon />
        Add employee
      </Button>
    </Link>
  </Container>
);

ListTitle.propTypes = {
  employeesCount: PropTypes.number,
};

export default ListTitle;
