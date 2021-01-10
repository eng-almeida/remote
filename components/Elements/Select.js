import PropTypes from 'prop-types';
import styled from 'styled-components';

import Field from './Field';
import { FieldText } from './Typography';

const SelectContainer = styled.div`
  position: relative;
`;

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

const Caret = styled.span`
  position: absolute;
  right: ${({ theme }) => theme.space[4]};
  top: ${({ theme }) => theme.space[2]};
  display: inline-flex;
  width: 10px;
  height: 10px;
  border-left: 2px solid ${({ theme }) => theme.colors.grays[400]};
  border-bottom: 2px solid ${({ theme }) => theme.colors.grays[400]};
  transform: rotate(-45deg);
`;

const SelectComponent = ({ label, helperText, children, ...inputProps }) => (
  <Field label={label} helperText={helperText} id={inputProps.id}>
    <SelectContainer>
      <Select {...inputProps}>{children}</Select>
      <Caret />
    </SelectContainer>
  </Field>
);

SelectComponent.propTypes = {
  label: PropTypes.string,
  helperText: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.element),
};

export default SelectComponent;
