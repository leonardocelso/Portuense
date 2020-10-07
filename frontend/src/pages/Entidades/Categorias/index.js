import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../../src/services/api';
import { Redirect } from "react-router-dom";
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Categorias = (props) => {
    //parametros
    var search = props.location.search;
    var params = new URLSearchParams(search);
    var action = params.get('action');
    var categoriaIdparam = props.match.params.categoriaId;
    const usuarioId = localStorage.getItem('userId');

    const [redirect, setRedirect] = useState(false);
    const [nomeCategoria, setNomeCategoria] = useState('');
    const [descricao, setDescricao] = useState('');
    const [ativo, setAtivo] = useState(1);

    useEffect(() => {
        if (action === 'edit' && categoriaIdparam !== '') {
            api.get(`categoria/${categoriaIdparam}`).then(response => {
                setNomeCategoria(response.data.nomeCategoria);
                setDescricao(response.data.descricao);
                response.data.ativo === 1 ? setAtivo(1) : setAtivo(0);
            });
        } else {
            return;
        }
    }, [categoriaIdparam]);

    function handleReset() {
        setRedirect(true);
    };

    async function handleStatus(e) {
        e.preventDefault();

        const data = {
            nomeCategoria,
            descricao,
            ativo,
        };
        console.log(data)
        if (action === 'edit') {
            try {
                const response = await api.put(`/categoria/${categoriaIdparam}`, data, {
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
                    const response = await api.post('categoria', data, {
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
            <div id="categorias">
                <div className="form-title">
                    <h1>Cadastro de Categorias</h1>
                </div>
                {redirect && <Redirect to="/lista-categoria" />}
                <form onSubmit={handleStatus} onReset={handleReset} action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nomeCategoria">Nome da Categoria</label>
                            <input id="txtNomeCategoria" type="text"
                                name="nomeCategoria"
                                value={nomeCategoria}
                                onChange={e => setNomeCategoria(e.target.value)} />
                        </div>
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="descricao">Descricao</label>
                            <input id="txtDescricao" type="text"
                                name="descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)} />
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
export default Categorias;