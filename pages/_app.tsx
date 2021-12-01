import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { UserProvider } from '@auth0/nextjs-auth0';
import { AdminNavbarContextProvider } from '@components/contexts/AdminNavbarContext';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider>
			<AdminNavbarContextProvider>
				<Component {...pageProps} />
			</AdminNavbarContextProvider>
		</UserProvider>
	)
};

export default MyApp;