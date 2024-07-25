// src/components/VerifyOtp.tsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const VerifyOtp: React.FC = () => {
    const [email, setEmail] = useState('');
    const [otpCode, setOtpCode] = useState('');

    const handleVerifyOtp = async () => {
        const token = await AuthService.verifyOtp(email, otpCode);
        if (token) {
            localStorage.setItem('token', token);
            alert('OTP verified successfully');
        } else {
            alert('OTP verification failed');
        }
    };

    return (
        <div>
            <h2>Verify OTP</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" placeholder="OTP Code" value={otpCode} onChange={(e) => setOtpCode(e.target.value)} />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
        </div>
    );
};

export default VerifyOtp;
