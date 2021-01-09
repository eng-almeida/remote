import { screen, fireEvent } from '@testing-library/react';
import EditForm from '../EditForm';

jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue("1"),
}));

jest.mock('next/router', () => ({
    useRouter: jest.fn().mockImplementation(() => ({
        push: jest.fn(),
        query: {
            id: '1'
        }
    }))
}));

const mockDispatch = jest.fn();


jest.mock('react-redux', () => {
    const actualReactRedux = jest.requireActual('react-redux');
    return {
      ...actualReactRedux,
      useDispatch: () => mockDispatch,
    };
});

describe('EditForm component', () => {
    it('should dispatch userUpdate on submit', () => {
        renderWithProviders(<EditForm />, {
            store: { 
				users: { 
					ids: ['1'], 
					entities: {
						1: {
							id: '1',
							name: 'John',
							birthdate: '10/01/1990',
							role: 'Professor',
							salary: '50000',
							country: 'Portugal'
						},
					}
				} 
			}
        });
        const addButton = screen.getByText('Save');
        const nameInput = screen.getByLabelText(/Name/i);

        fireEvent.change(nameInput, { target: { value: 'John Doe'}});
        fireEvent.click(addButton);

        expect(mockDispatch).toHaveBeenCalledWith({
            payload: {
                id: "1",
                changes: {
                    birthdate: "10/01/1990", 
                    country: "Portugal", 
                    id: "1", 
                    name: "John Doe", 
                    role: "Professor", 
                    salary: "50000"
                }
            }, 
            type: "users/userUpdate"
        });
    });
});