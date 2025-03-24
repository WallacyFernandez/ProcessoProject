import React, { useEffect, useState } from 'react';
import './PasswordGenerator.css';
import { ToastContainer } from 'react-toastify';

const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';

function PasswordGenerator() {

    const [password, setPassword] = useState('');
    const passwordLength = 10; // Tamanho fixo da senha

    useEffect(() => {
        generatePassword();
    },[]);

    const generatePassword = () => {
        const characterList = lowercaseList;
        let tempPassword = '';
        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterListLength);
            tempPassword += characterList.charAt(characterIndex);
        }

        setPassword(tempPassword);
    }

    return (
        <>
            <div className='container'>
                <h2 className='title'>Gerador de Senha</h2>
                <div className="password-wrapper">
                    <div className="password-area">
                        <div className="password">
                            <input type="text" value={password} disabled placeholder='Clique em Gerar Senha' />
                        </div>
                    </div>
                </div>
                <div className="setting">
                    <h3>Configuração da senha</h3>
                    <div className="customize">
                        <div className="checkboxes">
                            <div className="left">
                                <div className="checkbox-field">
                                    <input type="checkbox" name="lower" id="lower" checked disabled />
                                    <label htmlFor="lower">Include LowerCase(a-z)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button type='button' onClick={generatePassword}>Generate Password</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PasswordGenerator;