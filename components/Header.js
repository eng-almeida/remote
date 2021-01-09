import styled from 'styled-components';
import MainContainer from '@/components/MainContainer';
import { LabelOne } from '@/components/Elements/Typography';

const Header = styled.header`
	background: ${({ theme }) => theme.colors.white};
	height: 80px;
`;

const Container = styled(MainContainer)`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;
const RightContainer = styled.div`
	display: grid;
	grid-template-columns: repeat(2, auto);
	grid-column-gap: ${({ theme }) => theme.space[3]};
	justify-content: flex-end;
`;
const Avatar = styled.div`
	width: 36px;
	height: 36px;
	background: ${({ theme }) => theme.colors.salmon};
	border-radius: ${({ theme }) => theme.radii.round};
`;
const User = styled.div`
	color: ${({ theme }) => theme.colors.grays[300]};
	font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
const Role = styled.div`
	color: ${({ theme }) => theme.colors.grays[100]};
	${LabelOne}
`;


const HeaderComponent = () => (
	<Header>
		<Container>
			<RightContainer>
				<Avatar />
				<div>
					<User>Julie Howard</User>
					<Role>Admin</Role>
				</div>
			</RightContainer>
		</Container>
	</Header>
);

export default HeaderComponent;
 