import React, { useState, useContext } from 'react';

interface IAdminNavbarContext {
    isNavBarOpen: boolean, setNavBarOpen:(value:boolean) => void,
};

export const AdminNavbarContext = React.createContext<IAdminNavbarContext>({
    isNavBarOpen: false, setNavBarOpen:() => {},
});

export const AdminNavbarContextProvider = ({children}:React.PropsWithChildren<any>) => {
    const [isNavBarOpen, setNavBarOpen] = useState<boolean>(false);

    const value:IAdminNavbarContext = {
        isNavBarOpen, setNavBarOpen,
    };

    return <AdminNavbarContext.Provider value={value}>{children}</AdminNavbarContext.Provider>;
};

export const useAdminNavbarContext = () => {
    const context = useContext(AdminNavbarContext);
    if(!context) throw new Error('useAdminNavbarContext: Must be used inside <AdminNavbarContextProvider/>');
    return context;
};