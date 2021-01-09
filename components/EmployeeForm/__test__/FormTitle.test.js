import FormTitle from '../FormTitle';

describe('FormTitle component', () => {
	it('should match snapshot', () => {
		const { container } = renderWithProviders(
			<FormTitle title="Test" description="Test Description"	/>
		);
		expect(container).toMatchSnapshot();
	});
})