import React, { createContext } from 'react';
import UseFarebase from '../Hooks/UseFarebase';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const allContext = UseFarebase();
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;