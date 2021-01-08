import Head from 'next/head';
import styled from 'styled-components';
import Header from './Header';

const Layout = styled.div`
	background: ${({ theme }) => theme.colors.blue};
`;

const LayoutComponent = ({ children }) => {
	return (
		<Layout>
			<Head>
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />

				<title>Remote - User Management</title>
				<link rel="icon" href="/favicon.ico" />
      		</Head>
			<Header />
			<main>
				{children}
			</main>
		</Layout>
	)
}

export default LayoutComponent;
    
 