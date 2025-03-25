import React, { useEffect, useState } from 'react';
import './PasswordGenerator.css';
import { ToastContainer } from 'react-toastify';

const lowercaseList = 'abcdefghijklmnopqrstuvwxyz';
const symbolsList = "!@#$%^&*()_+-=[]{}|;:,.<>?";

function PasswordGenerator() {

    const [password, setPassword] = useState('');
    const [includeSymbols, setIncludeSymbols] = useState(false);
    const passwordLength = 10; // Tamanho fixo da senha

    useEffect(() => {
        generatePassword();
    },[]);

    const generatePassword = () => {
        let characterList = lowercaseList;
        if (includeSymbols) characterList += symbolsList;
        
        let tempPassword = '';
        const characterListLength = characterList.length;

        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * (characterListLength - 1));
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
                                    <label htmlFor="lower">Incluir Minúsculas (a-z)</label>
                                </div>
                                <div className="checkbox-field">
                                    <input 
                                        type="checkbox" 
                                        name="symbols" 
                                        id="symbols" 
                                        checked={includeSymbols}
                                        onChange={(e) => setIncludeSymbols(e.target.checked)}
                                    />
                                    <label htmlFor="symbols">Incluir Símbolos (&-#)</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button type='button' onClick={generatePassword}>Gerar Senha</button>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default PasswordGenerator;