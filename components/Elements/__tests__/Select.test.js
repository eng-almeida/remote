import Select from '@/components/Elements/Select';

describe('Select component', () => {
	it('should match snapshot', () => {
		const { container } = renderWithProviders(
			<Select 
				id="test"
				name="test"
				label="Test"
				helperText="Test helper"
      >
      	<option value="Test 1">Test 1</option>
      	<option value="Test 2">Test 2</option>
      	<option value="Test 3">Test 3</option>
			</Select>
		);
		expect(container).toMatchSnapshot();
	});
})