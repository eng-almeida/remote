import { useRouter } from 'next/router';
import Error from 'next/error'
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import MainContainer from 'components/MainContainer';
import EmployeeForm from 'components/EmployeeForm';
import EmployeeFormTitle from 'components/EmployeeForm/EmployeeFormTitle';

import { userSelectors } from 'redux/slices/users'

const Container = styled(MainContainer)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  margin-top: ${({ theme }) => theme.space[11]};
`;

export default function EditUser() {
  const router = useRouter();
  const employee = useSelector((state) => userSelectors.selectById(state, router.query.id))
  
  if (!employee) {
    return <Error statusCode={404} />
  }

  return (
    <Container>
      <EmployeeFormTitle 
        title="Edit employee" 
        description="Edit the information of your employee" 
      />
      <EmployeeForm data={employee} />
    </Container>
  );
}
