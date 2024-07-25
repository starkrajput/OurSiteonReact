// src/components/ResetPassword.tsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';
import { useParams } from 'react-router-dom';

const ResetPassword: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleResetPassword = async () => {
        const response = await AuthService.resetPassword(email, token, newPassword);
        alert(response);
    };

    return (
        <div>
            <h2>Reset Password</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="New Password" value={newPassword} onChange={(e) =>
                setNewPassword(e.target.value)} />
            <button onClick={handleResetPassword}>Reset Password</button>
        </div>
    );
};

export default ResetPassword;
