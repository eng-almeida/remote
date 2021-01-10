import Link from 'next/link';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Button from '@/components/Elements/Button';
import {
  LabelFour,
  LabelOne,
  LabelThree,
  LabelTwo,
} from '@/components/Elements/Typography';

const Ellipsis = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  min-width: ${({ last = false }) => (last ? '142px' : 0)};
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

const List = ({ employees }) => (
  <Table>
    <Th>
      <Td>Employee</Td>
      <Td>Job Title</Td>
      <Td>Country</Td>
      <Td>Salary</Td>
      <Td size="none" last></Td>
    </Th>
    {employees.map(user => (
      <Tr key={user.id}>
        <Td>
          <Name>{user.name}</Name>
          <Date>04/12/1990</Date>
        </Td>
        <Td>
          <Role>{user.role}</Role>
        </Td>
        <Td>{user.country}</Td>
        <Td>
          {formatPrice(user.salary)} USD <PerYear>per year</PerYear>
        </Td>
        <Td size="none">
          <Link href={`/employee/${user.id}`} passHref>
            <Button as="a" variant="secondary">
              Edit
            </Button>
          </Link>
        </Td>
      </Tr>
    ))}
  </Table>
);

List.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      birthdate: PropTypes.string,
      role: PropTypes.string,
      salary: PropTypes.string,
      country: PropTypes.string,
    }),
  ),
};

export default List;
