import Button from '@/components/Elements/Button';

describe('Button component', () => {
	it.each([['primary'], ['secondary']])('should match %s snapshot', variant => {
		const { container } = renderWithProviders(<Button variant={variant}>Test</Button>);
		expect(container).toMatchSnapshot();
	});
})