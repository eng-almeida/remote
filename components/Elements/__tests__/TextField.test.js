import TextField from '@/components/Elements/TextField';

describe('TextField component', () => {
	it('should match snapshot', () => {
		const { container } = renderWithProviders(
			<TextField
				label="Test"
				helperText="Test helper"
				id="test"
				name="test"
				placeholder="Test"	
			/>
		);
		expect(container).toMatchSnapshot();
	});
})