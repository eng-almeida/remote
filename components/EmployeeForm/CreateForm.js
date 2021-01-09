import { useDispatch } from 'react-redux';

import EmployeeForm from '@/components/EmployeeForm/partials/Form';
import FormTitle from '@/components/EmployeeForm/partials/FormTitle';
import { usersAddOne } from '@/redux/slices/users';

import Container from './partials/Container';

const CreateForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (employee) => {
    dispatch(usersAddOne(employee));
  };

  return (
    <Container>
      <FormTitle 
        title="Add a new employee" 
        description="Fill out the information of your new employee." 
      />
      <EmployeeForm onSubmit={handleSubmit}/>
    </Container>
  );
}

export default CreateForm;
