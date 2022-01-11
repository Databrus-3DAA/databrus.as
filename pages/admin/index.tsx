import React from 'react';
import Head from 'next/head';
import { withPageAuthRequired, useUser } from '@auth0/nextjs-auth0';
import { useAdminNavbarContext } from '@components/contexts/AdminNavbarContext';

function Admin() {
    const { isNavBarOpen, setNavBarOpen } = useAdminNavbarContext();
    const { user, error, isLoading } = useUser();
    
    if (error) return <div>{error.message}</div>;
    if (isLoading) return <div>Loading...</div>;

    console.log(user);
    
    return (
        <div>
            <Head>
				<title>Admin Panel</title>
				<link rel="icon" href="./favicon.ico" />
			</Head>

            <div>
                Admin Panel
            </div>
        </div>
    )
};

export default withPageAuthRequired(Admin);