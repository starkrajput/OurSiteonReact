// src/components/ForgotPassword.tsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const ForgotPasswordForm: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleForgotPassword = async () => {
        const response = await AuthService.forgotPassword(email);
        alert(response);
    };

    return (
        <div>
            <h2>Forgot Password</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button onClick={handleForgotPassword}>Send Password Reset Link</button>
        </div>
    );
};

export default ForgotPasswordForm;
