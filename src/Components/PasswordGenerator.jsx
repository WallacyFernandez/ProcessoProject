import React, { useEffect, useState } from "react";
import "./PasswordGenerator.css";
import { ToastContainer, toast } from "react-toastify";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const numberList = "0123456789";
const symbolsList = "!@#$%^&*()_+-=[]{}|;:,.<>?";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function PasswordGenerator() {
  const [password, setPassword] = useState("");
    const [passwordHistory, setPasswordHistory] = useState([]);
  const [number, setNumber] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [uppercase, setUppercase] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
  const passwordLength = 10;

  useEffect(() => {
    generatePassword(false);
  }, []);

  const generatePassword = (addToHistory = false) => {
    let characterList = lowercaseList;
    if (number) {
      characterList += numberList;
    }
    if (includeSymbols) {
      characterList += symbolsList;
    }
    if (uppercase) {
      characterList += uppercaseList;
    }
    let tempPassword = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      tempPassword += characterList.charAt(characterIndex);
    }

    setPassword(tempPassword);
        
        if (addToHistory) {
            setPasswordHistory(prevHistory => [...prevHistory, tempPassword]);
        }
  };

  const copyPassword = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        toast.success("Senha copiada com sucesso!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch(() => {
        toast.error("Falha ao copiar senha!", {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
  };

    const filteredHistory = passwordHistory.filter(historyPassword => 
        historyPassword.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <div className="container">
        <h2 className="title">Gerador de Senha</h2>
        <div className="password-wrapper">
          <div className="password-area">
            <div className="password">
              <div className="password-copy" onClick={copyPassword}>
                <span className="material-symbols-rounded">content_copy</span>
              </div>
              <input
                type="text"
                value={password}
                disabled
                placeholder="Clique em Gerar Senha"
              />
            </div>
          </div>
        </div>
        <div className="setting">
          <h3>Configuração da senha</h3>
          <div className="customize">
            <div className="checkboxes">
              <div className="checkbox-field">
                <input type="checkbox" name="lower" id="lower" checked disabled />
                <label htmlFor="lower">Incluir Minúsculas (a-z)</label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="upper"
                  id="upper"
                  checked={uppercase}
                  onChange={(e) => {
                    setUppercase(e.target.checked);
                    setTimeout(() => generatePassword(false), 100);
                  }}
                />
                <label htmlFor="upper">Incluir Maiúsculas (A-Z)</label>
              </div>
              <div className="checkbox-field">
                <input
                  type="checkbox"
                  name="number"
                  id="number"
                  checked={number}
                  onChange={(e) => setNumber(e.target.checked)}
                />
                <label htmlFor="number">Incluir Números (0-9)</label>
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
        <div className="buttons">
          <button type="button" onClick={() => generatePassword(true)}>
            Gerar Senha
          </button>
          <button type="button" onClick={copyPassword}>
            Copiar Senha
          </button>
                </div>
                
                <div className="password-history">
                    <h3>Histórico de Senhas</h3>
                    <div className="search-container">
                        <input 
                            type="text" 
                            placeholder="Buscar no histórico..." 
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <div className="history-list">
                        {passwordHistory.length > 0 ? (
                            filteredHistory.length > 0 ? (
                                [...filteredHistory].reverse().map((historyPassword, index) => (
                                    <div key={index} className="history-item">
                                        <span>{historyPassword}</span>
                                    </div>
                                ))
                            ) : (
                                <div className="empty-history">
                                    <span>Nenhuma senha encontrada para "{searchTerm}"</span>
                                </div>
                            )
                        ) : (
                            <div className="empty-history">
                                <span>Nenhuma senha gerada ainda. Clique em "Gerar Senha" para começar.</span>
                            </div>
                        )}
                    </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default PasswordGenerator;
