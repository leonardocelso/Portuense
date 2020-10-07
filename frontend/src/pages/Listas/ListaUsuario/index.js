import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import { GrAddCircle } from 'react-icons/gr';
import { BsPencilSquare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './styles.css';
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DataTableGenerica from '../../../components/DataTableGenerica';

const ListaUsuario = (props) => {
    const [usuario, setUsuario] = useState([]);

    useEffect(() => {
        api.get('usuario').then(response => {
            setUsuario(response.data);
        })
    }, [1]);


    const data = usuario;

    const columns = [
        {
            name: 'Nome',
            selector: 'nome',
            sortable: true,
        },
        {
            name: 'Sobrenome',
            selector: 'sobrenome',
            sortable: true,
            left: true,


        },
        {
            name: 'Email',
            selector: 'email',
            sortable: true,
            width: '25%',
        },
        {
            name: 'Telefone',
            selector: 'telefone',
            sortable: true,
        },
        {
            name: 'Whatsapp',
            selector: 'whatsapp',
            sortable: true,
            left: true,

        },
        {
            name: 'Ações',
            sortable: true,
            right: true,
            cell: row => <Link to={`usuarios/${row.id}?action=edit`}><button><BsPencilSquare size={20} color="#0" /></button></Link>

        },
    ];
    return (
        <div>
            <Header />
            <div id="lista-usuario">
                <div className="table-filter">
                    <div className="table-title">
                        <p>Usuários</p>
                    </div>
                    <div className="table-search">
                        <input type="text" placeholder="Encontre um usuário" />
                        <button><FiSearch size={18} color="#000000" /></button>
                        <div className="add">
                            <Link to={`usuarios?action=novo`}><button><GrAddCircle size={20} color="#fff" /></button></Link>
                        </div>
                    </div>
                </div>
                <div className="table-container">
                    <DataTableGenerica
                        data={data}
                        columns={columns}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default ListaUsuario;