import { useSelector } from 'react-redux';

import { allUsers } from '@/redux/slices/users';
import ListTitle from './partials/ListTitle';
import List from './partials/List';

const EmployeesList = () => {
  const employees = useSelector(allUsers);
  return (
    <>
      <ListTitle employeesCount={employees.length} />
      {employees.length > 0 ? 
        <List employees={employees}/> : 
        <p>No employees available. Add new employees</p>
      }
    </>
  );
};

export default EmployeesList;
