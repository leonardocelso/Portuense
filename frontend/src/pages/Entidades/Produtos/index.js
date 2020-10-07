import React, { useState, useEffect } from 'react';
import './styles.css';
import api from '../../../../src/services/api';
import { Redirect } from "react-router-dom";
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const Produtos = (props) => {
    //parametros
    var search = props.location.search;
    var params = new URLSearchParams(search);
    var action = params.get('action');
    var produtoIdparam = props.match.params.produtoId;
    const usuarioId = localStorage.getItem('userId');

    const [redirect, setRedirect] = useState(false);
    const [nomeProduto, setNomeProduto] = useState('');
    const [descricaoCurta, setDescricaoCurta] = useState('');
    const [descricao, setDescricao] = useState('');
    const [codigo, setCodigo] = useState('');
    const [valor, setValor] = useState('');
    const [ingredientes, setIngredientes] = useState('');
    const [unidadeId, setUnidadeId] = useState('');
    const [unidadesid, setUnidadesid] = useState([]);
    const [categoriaId, setCategoriaId] = useState('');
    const [categoriasid, setCategoriasid] = useState([]);
    const [telaInicial, setTelainical] = useState(1);
    const [ativo, setAtivo] = useState(1);

    useEffect(() => {
        if (action === 'edit' && produtoIdparam !== '') {
            api.get(`produto/${produtoIdparam}`).then(response => {
                setNomeProduto(response.data.nomeProduto);
                setDescricaoCurta(response.data.descricaoCurta);
                setDescricao(response.data.descricao);
                setCodigo(response.data.codigo);
                setValor(response.data.valor);
                setIngredientes(response.data.ingredientes);
                setUnidadeId(response.data.unidadeId);
                setCategoriaId(response.data.categoriaId);
                response.data.ativo === 1 ? setAtivo(1) : setAtivo(0);
            });
        } else {
            return;
        }
    }, [produtoIdparam]);

    useEffect(() => {
        api.get('unidade').then(response => {
            setUnidadesid(response.data);
        })
    }, [usuarioId]);

    useEffect(() => {
        api.get('categoria').then(response => {
            setCategoriasid(response.data);
        })
    }, [usuarioId]);

    function handleReset() {
        setRedirect(true);
    };

    async function handleStatus(e) {
        e.preventDefault();

        const data = {
            nomeProduto,
            descricao,
            descricaoCurta,
            codigo,
            valor,
            ingredientes,
            telaInicial,
            unidadeId,
            categoriaId,
            ativo,
        };

        if (action === 'edit') {
            try {
                const response = await api.put(`/produto/${produtoIdparam}`, data, {
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
                    const response = await api.post('produto', data, {
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
            <div id="produtos">
                <div className="form-title">
                    <h1>Cadastro de Produtos</h1>
                </div>
                {redirect && <Redirect to="/lista-produto" />}
                <form onSubmit={handleStatus} onReset={handleReset} action="">
                    <div id="esquerda">
                        <div className="input-block">
                            <label for="nomeProduto">Nome do Produto</label>
                            <input id="txtNomeProduto" type="text"
                                name="nomeProduto"
                                value={nomeProduto}
                                onChange={e => setNomeProduto(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label className="categoriaId" for="nome">Categoria do Produto</label>
                            <select type="select" required name="select" id="cboCategoria"
                                name="categoriaId"
                                value={categoriaId}
                                onChange={e => setCategoriaId(e.target.value)}>
                                <option value={""} defaultValue>Selecione...</option>
                                {categoriasid.map(categorias => (
                                    <option value={categorias.id}>{categorias.nomeCategoria}</option>

                                ))}
                            </select>
                        </div>
                        <div className="input-block">
                            <label for="descricaoCurta">Descrição curta</label>
                            <input className="desc-curta" id="txtDescricaoCurta" type="text"
                                name="descricaoCurta"
                                value={descricaoCurta}
                                onChange={e => setDescricaoCurta(e.target.value)}
                                style={{ height: 65 }}
                            />
                        </div>
                        <div className="input-block">
                            <label for="descricao">Descrição</label>
                            <input id="txtDescricao" type="text"
                                name="descricao"
                                value={descricao}
                                onChange={e => setDescricao(e.target.value)}
                                style={{ height: 75 }}
                            />
                        </div>
                    </div>
                    <div id="direita">
                        <div className="input-block">
                            <label for="codigo">Código do Produto</label>
                            <input id="txtCodigo" type="text"
                                name="codigo"
                                value={codigo}
                                onChange={e => setCodigo(e.target.value)} />
                        </div>
                        <div className="input-block">
                            <label for="unidadeId">Unidade do Produto</label>
                            <select type="select" name="select" id="cboUnidade"
                                name="unidadeId"
                                value={unidadeId}
                                onChange={e => setUnidadeId(e.target.value)}>
                                <option value={undefined} defaultValue>Selecione...</option>
                                {unidadesid.map(unidades => (
                                    <option value={unidades.id}>{unidades.nomeUnidade}</option>
                                ))}
                            </select>
                        </div>
                        <div className="input-block">
                            <label for="ingredientes">Ingredientes</label>
                            <input id="txtIngredientes" type="text"
                                name="ingredientes"
                                value={ingredientes}
                                onChange={e => setIngredientes(e.target.value)}
                                style={{ height: 65 }} />
                        </div>
                        <div className="input-block">
                            <label for="valor">Valor do Produto</label>
                            <input id="txtValor" type="text"
                                name="valor"
                                value={valor}
                                onChange={e => setValor(e.target.value)}
                            />
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

export default Produtos;