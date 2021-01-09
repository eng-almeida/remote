import { screen, fireEvent } from '@testing-library/react';
import CreateForm from '../CreateForm';

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue("1"),
}));

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
		push: jest.fn(),
	}))
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

describe('CreateForm component', () => {
    it('should dispatch usersAddOne on submit', () => {
        renderWithProviders(<CreateForm />);
        const addButton = screen.getByText('Add Employee');
        const nameInput = screen.getByLabelText(/Name/i);
        const birthdateInput = screen.getByLabelText(/Birthdate/i);
        const roleInput = screen.getByLabelText(/Job Title/i);
        const countryInput = screen.getByLabelText(/Country/i);
        const salaryInput = screen.getByLabelText(/Salary/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe'}});
        fireEvent.change(birthdateInput, { target: { value: '17/02/1990'}});
        fireEvent.change(roleInput, { target: { value: 'Software Eng'}});
        fireEvent.change(countryInput, { target: { value: 'Portugal'}});
        fireEvent.change(salaryInput, { target: { value: '5000'}});
        fireEvent.click(addButton);

        expect(mockDispatch).toHaveBeenCalledWith({
            type: "users/usersAddOne",
            payload: {
                birthdate: "17/02/1990", 
                country: "Portugal", 
                id: "1", 
                name: "John Doe", 
                role: "Software Eng", 
                salary: "5000"
            }
        });
    });
});