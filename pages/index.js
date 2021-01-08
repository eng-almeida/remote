import { useDispatch } from "react-redux";
import styled from 'styled-components';
import Button from 'components/Button';
import EmployeesList from 'components/EmployeesList';
import { usersAddOne } from 'redux/slices/users';
import MainContainer from 'components/MainContainer';

export default function Home() {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(usersAddOne({
      id: String(Math.random()),
      name: 'Joao',
      jobTitle: 'Product Manager',
      country: 'Unite States',
      salary: 600000
    }));
  }

  return (
    <MainContainer>
      <Button variant="secondary" onClick={handleAddUser}>Add </Button>
      <EmployeesList />
    </MainContainer>
  )
}
