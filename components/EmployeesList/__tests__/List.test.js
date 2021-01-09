import { screen, fireEvent } from '@testing-library/react';
import EmployeeList from '../List';

describe('Employee List component', () => {
	it('should render empty list', () => {
		const { container } = renderWithProviders(<EmployeeList />, { 
			store: { 
				users: { 
					ids: [], 
					entities: []
				} 
			} 
		});
		expect(container).toMatchSnapshot();
	});

	it.only('should render list', () => {
		const { container } = renderWithProviders(<EmployeeList />, { 
			store: { 
				users: { 
					ids: ['1', '2'], 
					entities: {
						1: {
							id: '1',
							name: 'John Doe',
							birthdate: '10/01/1990',
							role: 'Professor',
							salary: '50000',
							country: 'Portugal'
						},
						2: {
							id: '2',
							name: 'Jane Doe',
							birthdate: '10/01/1990',
							role: 'Engineer',
							salary: '50000',
							country: 'Portugal'
						}
					}
				} 
			} 
		});
		expect(container).toMatchSnapshot();
	});
})