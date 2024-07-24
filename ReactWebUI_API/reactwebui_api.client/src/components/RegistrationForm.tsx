// src/components/Register.tsx
import React, { useState } from 'react';
import AuthService from '../services/AuthService';

const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [mysteryWord, setMysteryWord] = useState('');
    const [usernameSec, setUsernameSec] = useState('');

    const handleRegister = async () => {
        const response = await AuthService.register(email, password, name, mobileNumber, mysteryWord, usernameSec,'User');
        if (response.success) {
            alert('Registration successful');
        } else {
            alert(response.message);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="text" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            <input type="text" placeholder="Mystery Word" value={mysteryWord} onChange={(e) => setMysteryWord(e.target.value)} />
            <input type="text" placeholder="Username" value={usernameSec} onChange={(e) => setUsernameSec(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default RegistrationForm;
