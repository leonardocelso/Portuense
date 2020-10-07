import React from 'react';

import logoImg from '../../../assets/images/logo.svg';

import './styles.css';

const Logon = (props) => {
    return (
        <div>
          <div id="logon">
            <div id="logon-esquerda">
              <div id="logo-img">
                <img src={logoImg} alt="Portuense - desde 1921"/>
              </div>
            </div>
                
            <div id="logon-direita">
                <form action="" id="form-login">
                    <div id="form-login-direita">
                      <div className="input-block-logon">
                          <label htmlFor="user">E-mail</label>
                          <input type="email" id="user" />
                      </div>
                    </div>
                    
                    <div id="form-login-esquerda">
                      <div className="input-block-logon">
                          <label htmlFor="password">Senha</label>
                          <input type="password" id="password" />
                      </div>
                    </div>
                    
                    <div id="form-login-footer">
                      <div className="button-container">
                          <button type="submit" className="btn">
                              Login
                          </button>
                      </div>
                    </div>
                </form>
            </div>

            <div id="logon-footer">
              <div><a href="/esqueci-senha">Esqueci a senha</a></div>
              <div><a href="/user?action=novo">Cadastro</a></div>
            </div>
          </div>
        </div>
    )
};

export default Logon;