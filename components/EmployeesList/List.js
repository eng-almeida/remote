import Link from 'next/link';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { allUsers } from 'redux/slices/users';
import Button from 'components/Elements/Button';
import { LabelOne, LabelTwo, LabelThree, LabelFour } from 'components/Elements/Typography';

const Ellipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

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

const Table = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.space[2]};
`;

const Th = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  padding: ${({ theme }) => `0 ${theme.space[6]}`};
`;

const Tr = styled.div`
  ${LabelThree}
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => `${theme.space[8]} ${theme.space[6]}`};
  border-radius: ${({ theme }) => theme.radii.medium};
`;

const Td = styled.div`
  color: ${({ theme }) => theme.colors.grays[200]};
  flex: ${({ size = 1 }) => size};
  min-width: 0;
`;

const Name = styled.div`
  ${LabelFour}
  ${Ellipsis}
  color: ${({ theme }) => theme.colors.grays[300]};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  padding-right: ${({ theme }) => theme.space[4]};
`;

const Role = styled.div`
  ${Ellipsis}
  padding-right: ${({ theme }) => theme.space[4]};
`;

const Date = styled.div`
  ${LabelTwo}
  color: ${({ theme }) => theme.colors.grays[100]};
`;

const PerYear = styled.span`
  ${LabelOne}
  color: ${({ theme }) => theme.colors.grays[100]};
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
        <Table>
          <Th>
            <Td>Employee</Td>
            <Td>Job Title</Td>
            <Td>Country</Td>
            <Td>Salary</Td>
            <Td size="none" style={{ minWidth: '142px' }}></Td>
          </Th>
          {users.map(user => (
            <Tr key={user.id}>
              <Td>
                <Name>{user.name}</Name>
                <Date>04/12/1990</Date>
              </Td>
              <Td><Role>{user.role}</Role></Td>
              <Td>{user.country}</Td>
              <Td>
                {formatPrice(user.salary)} USD{' '}
                <PerYear>per year</PerYear>
              </Td>
              <Td size="none">
                <Link href={`/user/${user.id}`} passHref>
                  <Button as="a" variant="secondary">
                    Edit
                  </Button>
                </Link>
              </Td>
            </Tr>
          ))}
        </Table>
      )}
    </>
  );
};

export default EmployeesList;
