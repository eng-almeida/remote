import styled from 'styled-components';

import MainContainer from 'components/MainContainer';
import EmployeeForm from 'components/EmployeeForm';
import EmployeeFormTitle from 'components/EmployeeForm/EmployeeFormTitle';

const Container = styled(MainContainer)`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radii.medium};
  margin-top: ${({ theme }) => theme.space[11]};
`;

export default function CreateUser() {
  return (
    <Container>
      <EmployeeFormTitle 
        title="Add a new employee" 
        description="Fill out the information of your new employee." 
      />
      <EmployeeForm />
    </Container>
  );
}
