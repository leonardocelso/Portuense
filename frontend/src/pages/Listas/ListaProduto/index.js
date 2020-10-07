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

const ListaProduto = (props) => {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        api.get('produto').then(response => {
            setProduto(response.data);
        })
    }, [1]);


    const data = produto;

    const columns = [
        {
            name: 'Nome do Produto',
            selector: 'nomeProduto',
            sortable: true,
            width: '25%',
        },
        {
            name: 'Descrição Curta',
            selector: 'descricaoCurta',
            sortable: true,
            left: true,
            width: '30%',

        },
        {
            name: 'Código',
            selector: 'codigo',
            sortable: true,
            width: '22%',
        },
        {
            name: 'Valor',
            selector: 'valor',
            sortable: true,
            left: true,

        },
        {
            name: 'Ações',
            sortable: true,
            right: true,
            cell: row => <Link to={`produtos/${row.id}?action=edit`}><button><BsPencilSquare size={20} color="#0" /></button></Link>

        },

    ];

    return (
        <div>
            <Header />
            <div id="lista-produto">
                <div className="table-filter">
                    <div className="table-title">
                        <p>Produtos</p>
                    </div>
                    <div className="table-search">
                        <input type="text" placeholder="Encontre um produto" />
                        <button><FiSearch size={18} color="#000000" /></button>
                        <div className="add">
                            <Link to={`produtos?action=novo`}><button><GrAddCircle size={20} color="#fff" /></button></Link>
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

export default ListaProduto;