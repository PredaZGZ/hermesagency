import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function SignUpForm() {
    const [role, setRole] = useState('User');
    const [password, setPassword] = useState('');
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [ApiToken, setApiToken] = useState('');

    const { url } = useSelector(state => state.api)

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post(url + '/auth/register/', {
            role,
            "name": Name,
            "tokenAPI": ApiToken,
            "email": Email,
            "password": password
        }).then(res => {
            if (res.status === 201) {
                document.location.reload()
            }
        })

    };

    return (
        <div className="fondo22 fixed flex flex-col justify-center">
            <form className='form3 flex flex-col text-center gap-14 text-white'
                onSubmit={handleSubmit}>
                <h1 className='text-bold text-4xl'>Create User</h1>
                <label className=''>
                    Role:
                    <select style={{ backgroundColor: "transparent" }}
                        value={role} onChange={(event) => setRole(event.target.value)}>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                    </select>
                </label>
                <label>
                    Name:
                    <input type="text" value={Name} onChange={(event) => setName(event.target.value)} />
                </label>
                <label>
                    Email:
                    <input type="text" value={Email} onChange={(event) => setEmail(event.target.value)} />
                </label>
                <label>
                    Api Token:
                    <input type="text" value={ApiToken} onChange={(event) => setApiToken(event.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                </label>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    );
}
