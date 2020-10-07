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

const ListaUnidade = (props) => {
    const [unidade, setUnidade] = useState([]);

    useEffect(() => {
        api.get('unidade').then(response => {
            setUnidade(response.data);
        })
    }, [1]);

    const data = unidade;

    const columns = [
        {
            name: 'Unidade',
            selector: 'nomeUnidade',
            sortable: true,
        },
        {
            name: 'Abreviação',
            selector: 'abreviacao',
            sortable: true,
            left: true,

        },
        {
            name: 'Ações',
            sortable: true,
            right: true,
            cell: row => <Link to={`unidades/${row.id}?action=edit`}><button><BsPencilSquare size={20} color="#0" /></button></Link>
        },
    ];

    return (
        <div>
            <Header />
            <div id="lista-unidade">
                <div className="table-filter">
                    <div className="table-title">
                        <p>Unidades</p>
                    </div>
                    <div className="table-search">
                        <input type="text" placeholder="Encontre uma unidade" />
                        <button><FiSearch size={18} color="#000000" /></button>
                        <div className="add">
                            <Link to={`unidades?action=novo`}><button><GrAddCircle size={20} color="#fff" /></button></Link>
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

export default ListaUnidade;