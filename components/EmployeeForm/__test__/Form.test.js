import { screen, fireEvent } from '@testing-library/react';
import Form from '../partials/Form';

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue("1"),
}));

const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockImplementation(() => ({
		push: mockPush,
	}))
}));

const mockOnSubmit = jest.fn();

describe('Form component', () => {
	describe('when creating a new employee', () => {
		beforeEach(() => {
			renderWithProviders(<Form onSubmit={mockOnSubmit} />);
		})

		it('should render Add button', () => {
			const addButton = screen.getByText('Add Employee');
			expect(addButton).toBeInTheDocument()
		});

		it('should call onSubmit callback and redirect to the home page on submit', () => {
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

			expect(mockOnSubmit).toHaveBeenCalledWith({
				birthdate: "17/02/1990", 
				country: "Portugal", 
				id: "1", 
				name: "John Doe", 
				role: "Software Eng", 
				salary: "5000"
			});
			expect(mockPush).toHaveBeenCalledWith('/');
		});

		it('should redirect to the home page when user clicks on cancel button', () => {
			const cancelButton = screen.getByText('Cancel');
			fireEvent.click(cancelButton);
			expect(mockOnSubmit).not.toHaveBeenCalledWith();
			expect(mockPush).toHaveBeenCalledWith('/');
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
			renderWithProviders(<Form data={data} onSubmit={mockOnSubmit} />);
		})

		it('should render Save button', () => {
			const saveButton = screen.getByText('Save');
			expect(saveButton).toBeInTheDocument()
		});
	})
})