import { screen, fireEvent } from '@testing-library/react';
import Field from '@/components/Elements/Field';

describe('Field component', () => {
	it('should match snapshot', () => {
		const { container } = renderWithProviders(<Field id="test" label="Test"><input id="test" /></Field>);
		expect(container).toMatchSnapshot();
	});

	describe('when input is focused', () => {
		it('should match snapshot', () => {
			const { container } = renderWithProviders(<Field id="test" label="Test"><input id="test" /></Field>);
			const input = screen.getByLabelText(/Test/i);
			fireEvent.focus(input);
			expect(container).toMatchSnapshot();
		});
	});
})