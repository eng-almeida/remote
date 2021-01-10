import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LabelOne } from '@/components/Elements/Typography'

const Label =  styled.label`
	${LabelOne}
	display: block;
	color: ${({ theme, isFocus }) => isFocus ? theme.colors.purple[200] : theme.colors.grays[100]};
	margin-bottom: ${({ theme }) => theme.space[1]};
	transition: color 0.2s;
`;

 const HelperText = styled.div`
	${LabelOne}
	color: ${({ theme }) => theme.colors.grays[300]};
	opacity: 0.5;
	margin-top: ${({ theme }) => theme.space[2]};
`;

const Field = ({ id, label, helperText, children }) => {
  const [isFocus, setFocus] = useState(false);
  const handleFocus = useCallback(() => setFocus(true), []);
  const handleBlur = useCallback(() => setFocus(false), []);

  return (
    <div>
      <Label isFocus={isFocus} htmlFor={id}>{label}</Label>
			{React.Children.map(children, child => (
				React.cloneElement(child, { onFocus: handleFocus, onBlur: handleBlur })
			))}
      <HelperText>{helperText}</HelperText>
    </div>
  );
}

Field.propTypes = {
	id: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	helperText: PropTypes.string.isRequired,
	children: PropTypes.element.isRequired,
};

export default Field;