import styled from 'styled-components';
import MainContainer from '@/components/MainContainer';

const Container = styled(MainContainer)`
	background: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.radii.medium};
	margin-top: ${({ theme }) => theme.space[11]};
`;

export default Container;