import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from './Field';
import { FieldText } from './Typography';

const Select = styled.select`
	${FieldText}
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grays[400]};
	color: ${({ theme }) => theme.colors.grays[300]};
	outline: none;
	padding-bottom: ${({ theme }) => theme.space[2]};
	width: 100%;

	-moz-appearance: none; 
	-webkit-appearance: none; 
	&::-ms-expand { 
		display: none; 
	}
`;

const SelectComponent = ({ label, helperText, children, ...inputProps }) => (
	<Field label={label} helperText={helperText} id={inputProps.id}>
		<Select {...inputProps}>
			{ children }
		</Select>
	</Field>
);

SelectComponent.propTypes = {
	label: PropTypes.string,
	helperText: PropTypes.string,
	children: PropTypes.arrayOf(PropTypes.element),
};

export default SelectComponent;