import { screen, fireEvent } from '@testing-library/react';
import Form from '../Form';

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue("1"),
}));

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
  useDispatch: () => mockDispatch,
}));

const mockPush = jest.fn();
jest.spyOn(require('next/router'), 'useRouter').mockImplementation(() => ({
	push: mockPush,
}));

describe('Form component', () => {

	describe('when creating a new employee', () => {
		beforeEach(() => {
			renderWithProviders(<Form />);
		})

		it('should render Add button', () => {
			const addButton = screen.getByText('Add Employee');
			expect(addButton).toBeInTheDocument()
		});

		it('should dispatch usersAddOne on submit', () => {
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

			expect(mockDispatch).toHaveBeenCalledWith(
				{
					payload: {
						birthdate: "17/02/1990", 
						country: "Portugal", 
						id: "1", 
						name: "John Doe", 
						role: "Software Eng", 
						salary: "5000"
					}, 
					type: "users/usersAddOne"
				})
		});
	});

	describe('when editing an existant employee', () => {
		beforeEach(() => {
			const data = {
				id: "1",
				name: 'John Doe',
				birthdate: '17/02/1990',
				role: 'Software Eng',
				salary: '5000',
				country: 'Portugal'
			};
			renderWithProviders(<Form data={data}/>);
		})

		it('should render Save button', () => {
			const saveButton = screen.getByText('Save');
			expect(saveButton).toBeInTheDocument()
		});

		it('should dispatch userUpdate on submit', () => {
			const addButton = screen.getByText('Save');
			const countryInput = screen.getByLabelText(/Country/i);
			
			fireEvent.change(countryInput, { target: { value: 'France'}});
			fireEvent.click(addButton);

			expect(mockDispatch).toHaveBeenCalledWith(
				{
					payload: {
						id: "1",
						changes: {
							birthdate: "17/02/1990", 
							country: "France", 
							id: "1", 
							name: "John Doe", 
							role: "Software Eng", 
							salary: "5000"
						}
					}, 
					type: "users/userUpdate"
				})
		});
	})

	
})