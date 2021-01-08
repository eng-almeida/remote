import styled from 'styled-components';

import Field from './Field';

const Select = styled.select`
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.colors.grays[400]};
	color: ${({ theme }) => theme.colors.grays[300]};
	font-size: 20px;
	line-height: 24px;
	outline: none;
	padding-bottom: ${({ theme }) => theme.space[2]};
	width: 100%;

	-moz-appearance: none; 
	-webkit-appearance: none; 
	&::-ms-expand { 
		display: none; 
	}
`;

const SelectComponent = ({ label, helperText, children, ...inputProps }) => {
	return (
		<Field label={label} helperText={helperText} id={inputProps.id}>
			<Select {...inputProps}>
				{ children }
			</Select>
		</Field>
	);
};

export default SelectComponent;