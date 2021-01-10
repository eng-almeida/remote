import ListTitle from '../ListTitle';

describe('ListTitle component', () => {
	it('should match snapshot', () => {
		const { container } = renderWithProviders(
			<ListTitle employeesCount={3}	/>
		);
		expect(container).toMatchSnapshot();
	});
})