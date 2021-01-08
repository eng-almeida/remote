import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-align: center;
  background: ${({ theme, variant = 'primary' }) => variant === 'secondary' ? 'transparent' : theme.colors.purple[200] };
  border: 2px solid ${({ theme }) => theme.colors.purple[200] };
  border-radius: ${({ theme }) => theme.radii.large};
  box-shadow: ${({ theme }) => theme.shadows[0]};
  padding: ${({ theme }) => `${theme.space[3]} ${theme.space[6]}`};
  color: ${({ theme, variant = 'primary' }) => variant === 'secondary' ? theme.colors.purple[200] : theme.colors.white };
  font-size: 16px;
  line-height: 19px;
  font-family: inherit;
  min-width: 142px;
`
export default Button;