import styled from 'styled-components';

import Field from './Field';

const TextInput = styled.input`
 	font-family: inherit;
	font-size: 20px;
	line-height: 24px;
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

	&:focus {
		border-bottom: 1.5px solid ${({ theme }) => theme.colors.purple[200]};
	}
`;

const TextField = ({ label, helperText, ...inputProps }) => {
  return (
    <Field label={label} helperText={helperText} id={inputProps.id}>
      <TextInput {...inputProps} />
    </Field>
  )
}

export default TextField;