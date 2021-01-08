import { useRouter } from 'next/router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { usersAddOne, userUpdate } from '@/redux/slices/users';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

import Button from '@/components/Elements/Button';
import TextField from '@/components/Elements/TextField';
import Select from '@/components/Elements/Select';

const FieldContainer = styled.div`
  display: grid;
  grid-row-gap: ${({ theme }) => theme.space[7]};
  margin: ${({ theme }) => `${theme.space[12]} auto 0 auto`};
  width: 600px;
`;

const Actions = styled.div`
  background: ${({ theme }) => theme.colors.purple[100]};
  border-bottom-left-radius: ${({ theme }) => theme.radii.medium};
  border-bottom-right-radius: ${({ theme }) => theme.radii.medium};
  padding: ${({ theme }) => `${theme.space[8]} 0`};
  margin-top: ${({ theme }) => theme.space[14]};
  text-align: center;

  & > button:first-child {
    margin-right: ${({ theme }) => theme.space[4]};
  }
`;

const defaultEmployeeData = {
	id: uuidv4(),
	name: '',
	birthdate: '',
	role: '',
  salary: '',
  country: 'Portugal'
};

const COUNTRIES = [
  "Portugal", "Spain", "France", "United States"
];

const EmployeeForm = ({ data }) => {
	const dispatch = useDispatch();
  const router = useRouter();
  const [employee, setEmployee] = useState(data || defaultEmployeeData);

  const handleChange = ev => {
    const { value, name } = ev.target;
    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  const handleSubmitEmployee = (ev) => {
		ev.preventDefault();
		if(!data) {
			dispatch(usersAddOne(employee));
		} else {
			dispatch(userUpdate({ id: employee.id, changes: employee }));
		}
    router.push('/');
  }

  const handleCancel = (ev) => {
		ev.preventDefault();
		router.push('/');
	}
	
  return <form onSubmit={handleSubmitEmployee}>
    <FieldContainer>
      <TextField
        label="Name"
        helperText="First and last name"
        id="name"
        name="name"
        placeholder="e.g. Jane Doe"
        required
        value={employee.name}
        onChange={handleChange}
      />
      <TextField
        label="Birthdate"
        helperText="DD/MM/YYYY"
        id="birthdate"
        name="birthdate"
        placeholder="e.g. 17/02/1990"
        required
        pattern="\d{1,2}/\d{1,2}/\d{4}"
        value={employee.birthdate}
        onChange={handleChange}
      />
      <TextField
        label="Job Title"
        helperText="What is their role?"
        id="role"
        name="role"
        placeholder="e.g. Product Manager"
        required
        value={employee.role}
        onChange={handleChange}
      />
      <Select 
        id="country"
        name="country"
				label="Country"
        helperText="Where are they base?"
        onChange={handleChange}
        value={employee.country}
			>
        {COUNTRIES.map((value, idx) => <option key={idx} value={value}>{value}</option>)}
			</Select>
      <TextField
        label="Salary"
        helperText="Gross yearly salary"
        id="salary"
        name="salary"
        placeholder="e.g. 50000"
        required
        value={employee.salary}
        onChange={handleChange}
      />
    </FieldContainer>
    <Actions>
      <Button variant="secondary" onClick={handleCancel}>Cancel</Button>
      <Button>{ data ? 'Save' : 'Add Employee'}</Button>
    </Actions>
  </form>
}

export default EmployeeForm;