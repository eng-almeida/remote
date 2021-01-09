import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Field from './Field';
import { FieldText } from './Typography';

const rotate = keyframes`
  from {
    width: 0;
  }

  to {
    width: 100%;
  }
`;

const Border = styled.div`
	position: absolute;
	bottom: 0;
	width: 0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.purple[200]};
`;

const TextFieldContainer = styled.div`
	position: relative;
`;

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

	&:focus + ${Border} {
		animation: ${rotate} 0.2s linear;
		animation-fill-mode: forwards;
	}
`;

const TextField = ({ label, helperText, ...inputProps }) => (
	<Field label={label} helperText={helperText} id={inputProps.id}>
		<TextFieldContainer>
			<TextInput {...inputProps} />
			<Border />
		</TextFieldContainer>
	</Field>
);

TextField.propTypes = {
	label: PropTypes.string,
	helperText: PropTypes.string,
};

export default TextField;