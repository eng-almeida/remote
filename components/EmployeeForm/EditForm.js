import { useRouter } from 'next/router';
import Error from 'next/error'
import { useSelector, useDispatch } from 'react-redux';

import EmployeeForm from '@/components/EmployeeForm/partials/Form';
import FormTitle from '@/components/EmployeeForm/partials/FormTitle';
import Container from './partials/Container';
import { userSelectors, userUpdate } from '@/redux/slices/users';

const EditForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const employee = useSelector((state) => userSelectors.selectById(state, router.query.id));

  const handleSubmit = (employee) => {
    dispatch(dispatch(userUpdate({ id: employee.id, changes: employee })));
  }
  
  if (!employee) {
    return <Error statusCode={404} />
  }

  return (
    <Container>
      <FormTitle 
        title="Edit employee" 
        description="Edit the information of your employee" 
      />
      <EmployeeForm data={employee} onSubmit={handleSubmit} />
    </Container>
  );
}

export default EditForm;