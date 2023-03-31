import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CreateAccountForm() {
    const [phase, setPhase] = useState('Phase 1');
    const [accountName, setAccountName] = useState('');
    const [accountId, setAccountId] = useState('');
    const [balanceInicial, setBalanceInicial] = useState('');
    const [payoutDate, setPayoutDate] = useState('');

    const { userToken, user } = useSelector((state) => state.auth)
    const { url } = useSelector(state => state.api)

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post(url + '/accounts/', {
            "accountid": accountId,
            "name": accountName,
            "initialbalance": balanceInicial,
            "userid": user.id,
            "phase": phase
        }, {
            headers: {
                "auth-token": userToken
            }
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
                <h1>Create Account</h1>
                <label className=''>
                    Phase:
                    <select style={{ backgroundColor: "transparent" }}
                        value={phase} onChange={(event) => setPhase(event.target.value)}>
                        <option value="Phase 1">Phase 1</option>
                        <option value="Phase 2">Phase 2</option>
                        <option value="Payout">Payout</option>
                    </select>
                </label>
                {phase === 'Payout' && (
                    <label>
                        Payout Date:
                        <input type="date" value={payoutDate} onChange={(event) => setPayoutDate(event.target.value)} />
                    </label>
                )}
                <label>
                    Account Name:
                    <input type="text" value={accountName} onChange={(event) => setAccountName(event.target.value)} />
                </label>
                <label>
                    Account ID:
                    <input type="text" value={accountId} onChange={(event) => setAccountId(event.target.value)} />
                </label>
                <label>
                    Balance Inicial:
                    <input type="number" value={balanceInicial} onChange={(event) => setBalanceInicial(event.target.value)} />
                </label>
                <button type="submit">Crear cuenta</button>
            </form>
        </div>
    );
}
