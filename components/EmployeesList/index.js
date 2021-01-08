import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { allUsers } from 'redux/slices/users';
import Button from '../Button';

const Container = styled.section`
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
const Grid = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.space[2]};
`;
const RowTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  padding: ${({ theme }) => `0 ${theme.space[6]}`};
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space[8]} ${theme.space[6]}`};
  border-radius: ${({ theme }) => theme.radii.medium};
  font-size: 16px;
  line-height: 26px;
`;
const Col = styled.div`
  color: ${({ theme }) => theme.colors.grays[200]};
  flex: ${({ size = 1 }) => size};
  min-width: 0;
`;
const Ellipsis = styled.div`
  color: ${({ theme }) => theme.colors.grays[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 18px;
  line-height: 22px;
`;
const Date = styled.div`
  color: ${({ theme }) => theme.colors.grays[100]};
  font-size: 14px;
  line-height: 22px;
`;
const PerYear = styled.span`
  color: ${({ theme }) => theme.colors.grays[100]};
  font-size: 13px;
  line-height: 18px;
`;

const formatPrice = price => new Intl.NumberFormat('en-US').format(price);

const EmployeesList = () => {
  const users = useSelector(allUsers);
  return (
    <>
      <Container>
        <div>
          <Title>People</Title>
          <EmployeesCount>
            {users.length} employees
          </EmployeesCount>
        </div>
        <Link href="/user" passHref>
          <Button as="a">Add employee</Button>
        </Link>
      </Container>
      {users.length > 0 && (
        <Grid>
          <RowTitle>
            <Col>Employee</Col>
            <Col>Job Title</Col>
            <Col>Country</Col>
            <Col>Salary</Col>
            <Col size="none" style={{ minWidth: '142px' }}></Col>
          </RowTitle>
          {users.map(user => (
            <Row key={user.id}>
              <Col>
                <Ellipsis>{user.name}</Ellipsis>
                <Date>04/12/1990</Date>
              </Col>
              <Col>{user.jobTitle}</Col>
              <Col>{user.country}</Col>
              <Col>
                {formatPrice(user.salary)} USD{' '}
                <PerYear>per year</PerYear>
              </Col>
              <Col size="none">
                <Link href={`/user/${user.id}`} passHref>
                  <Button as="a" variant="secondary">
                    Edit
                  </Button>
                </Link>
              </Col>
            </Row>
          ))}
        </Grid>
      )}
    </>
  );
};

export default EmployeesList;
