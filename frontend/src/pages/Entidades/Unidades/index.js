import './styles.css';
import React, { useState, useEffect } from 'react';
import api from '../../../../src/services/api';
import { Redirect } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Unidades = (props) => {
    //parametros
    var search = props.location.search;
    var params = new URLSearchParams(search);
    var action = params.get('action');
    var unidadeIdparam = props.match.params.unidadeId;
    const usuarioId = localStorage.getItem('userId');

    const [redirect, setRedirect] = useState(false);
    const [nomeUnidade, setNomeUnidade] = useState('');
    const [abreviacao, setAbreviacao] = useState('');
    const [ativo, setAtivo] = useState(1);

    useEffect(() => {
        if (action === 'edit' && unidadeIdparam !== '') {
            api.get(`unidade/${unidadeIdparam}`).then(response => {
                setNomeUnidade(response.data.nomeUnidade);
                setAbreviacao(response.data.abreviacao);
                response.data.ativo === 1 ? setAtivo(1) : setAtivo(0);
            });
        } else {
            return;
        }
    }, [unidadeIdparam]);

    function handleReset() {
        setRedirect(true);
    };

    async function handleStatus(e) {
        e.preventDefault();

        const data = {
            nomeUnidade,
            abreviacao,
            ativo,
        };
        if (action === 'edit') {
            try {
                const response = await api.put(`/unidade/${unidadeIdparam}`, data, {
                    headers: {
                        Authorization: 1,
                    }
                });
                alert(`Cadastro atualizado com sucesso.`);
                setRedirect(true);
            } catch (err) {
                alert('Erro na atualização, tente novamente.');
            }
        } else {
            if (action === 'novo') {

                try {
                    const response = await api.post('unidade', data, {
                        headers: {
                            Authorization: 1,
                        }
                    });
                    alert(`Feito o cadastro com Sucesso`);
                    setRedirect(true);
                } catch (err) {

                    alert('Erro no cadastro, tente novamente.');
                }
            }
        }
    }

    return (
        <div>
            <Header />
            <div id="unidades">
                <div className="form-title">
                    <h1>Cadastro de Unidades</h1>
                </div>
                {redirect && <Redirect to="/lista-unidade" />}
                <form onSubmit={handleStatus} onReset={handleReset} action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nome">Nome</label>
                            <input id="txtNome" type="text"
                                name="nomeUnidade"
                                value={nomeUnidade}
                                onChange={e => setNomeUnidade(e.target.value)} />
                        </div>
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="descricao">Descricao</label>
                            <input id="txtDescricao" type="text"
                                name="abreviacao"
                                value={abreviacao}
                                onChange={e => setAbreviacao(e.target.value)} />
                        </div>
                    </div>
                    <div className="buttons">
                        <button type="submit">Enviar</button>
                        <button type="reset">Cancelar</button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    )
};

export default Unidades;