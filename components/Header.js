import styled from 'styled-components';
import MainContainer from 'components/MainContainer';

const Styles = {
	Header: styled.header`
		background: ${({ theme }) => theme.colors.white};
		height: 80px;
	`,
	Container: styled(MainContainer)`
		height: 100%;
    	display: flex;
    	flex-direction: column;
    	justify-content: center;
	`,
	RightContainer: styled.div`
		display: grid;
		grid-template-columns: repeat(2, auto);
		grid-column-gap: ${({ theme }) => theme.space[3]};
    	justify-content: flex-end;
	`,
	Avatar: styled.div`
		width: 36px;
		height: 36px;
		background: ${({ theme }) => theme.colors.salmon};
		border-radius: ${({ theme }) => theme.radii.round};
	`,
	User: styled.div`
		color: ${({ theme }) => theme.colors.grays[300]};
		font-size: 16px;
		line-height: 19px;
		font-weight: ${({ theme }) => theme.fontWeights.medium};
	`,
	Role: styled.div`
		color: ${({ theme }) => theme.colors.grays[100]};
		font-size: 13px;
		line-height: 16px;
	`
};

const Header = () => {
	return (
		<Styles.Header>
			<Styles.Container>
				<Styles.RightContainer>
					<Styles.Avatar />
					<div>
						<Styles.User>Julie Howard</Styles.User>
						<Styles.Role>Admin</Styles.Role>
					</div>
				</Styles.RightContainer>
			</Styles.Container>
		</Styles.Header>
	);
}

export default Header;
 