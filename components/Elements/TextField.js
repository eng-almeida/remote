import styled from 'styled-components';
import PropTypes from 'prop-types';

import Field from './Field';
import { FieldText } from './Typography';

const TextInput = styled.input`
	${FieldText}
 	font-family: inherit;
	color: ${({ theme }) => theme.colors.grays[300]};
	outline: none;
	background: transparent;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grays[400]};
	padding-bottom: ${({ theme }) => theme.space[2]};
	width: 100%;

	&::placeholder,
	&::-webkit-input-placeholder,
	&:-ms-input-placeholder {
		color: ${({ theme }) => theme.colors.grays[200]};
	}

	&::-webkit-outer-spin-button,
	&::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	&[type=number] {
		-moz-appearance: textfield;
	}

	&:focus {
		border-bottom: 1.5px solid ${({ theme }) => theme.colors.purple[200]};
	}
`;

const TextField = ({ label, helperText, ...inputProps }) => (
	<Field label={label} helperText={helperText} id={inputProps.id}>
		<TextInput {...inputProps} />
	</Field>
);

TextField.propTypes = {
	label: PropTypes.string,
	helperText: PropTypes.string,
};

export default TextField;