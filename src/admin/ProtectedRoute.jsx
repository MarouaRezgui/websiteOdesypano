import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthHook';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { currentUser, loading } = useAuth();
    const navigate = useNavigate()
    if (loading) {
        return <div>Loading...</div>;
    }

    return currentUser ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
