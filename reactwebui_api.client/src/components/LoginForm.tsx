import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthService from '../services/AuthService';

const LoginForm: React.FC = () => {
    const [emailOrUsername, setEmailOrUsername] = useState('');
    const [password, setPassword] = useState('');
    const [useEmail, setUseEmail] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const history = useHistory();

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const { token, role } = await AuthService.login(emailOrUsername, password, useEmail);
            localStorage.setItem('token', token);
            localStorage.setItem('role', role);
            setError(null);

            switch (role) {
                case 'Admin':
                    history.push('/admin-dashboard');
                    break;
                case 'Employee':
                    history.push('/employee-dashboard');
                    break;
                case 'Customer':
                    history.push('/customer-dashboard');
                    break;
                default:
                    history.push('/');
                    break;
            }
        } catch (error) {
            setError('Login failed. Please check your credentials and try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email or Username</label>
                    <input
                        type="text"
                        value={emailOrUsername}
                        onChange={(e) => setEmailOrUsername(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>
                        <input
                            type="checkbox"
                            checked={useEmail}
                            onChange={() => setUseEmail(!useEmail)}
                        />
                        Use Email
                    </label>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
