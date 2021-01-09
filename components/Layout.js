import Head from 'next/head';
import Header from './Header';

const Layout = ({ children }) => (
	<div>
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
	</div>
);

export default Layout;
    
 