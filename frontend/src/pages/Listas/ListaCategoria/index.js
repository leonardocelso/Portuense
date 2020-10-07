import React, { useState, useEffect } from 'react';
import api from '../../../services/api';
import './styles.css';
import { FiSearch } from 'react-icons/fi'; //pacote feather icons dentro do react
import { GrAddCircle } from 'react-icons/gr';
import { BsPencilSquare } from 'react-icons/bs';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import DataTableGenerica from '../../../components/DataTableGenerica';
import { Link } from 'react-router-dom';

const ListaCategoria = (props) => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        api.get('categoria').then(response => {
            console.log(response.data);
            setCategorias(response.data);
        })
    }, [1]);



    const data = categorias;

    const columns = [
        {
            name: 'Categoria',
            selector: 'nomeCategoria',
            sortable: true,

        },
        {
            name: 'Descrição',
            selector: 'descricao',
            sortable: true,
            left: true,

        },
        {
            name: 'Ações',
            sortable: true,
            right: true,
            cell: row => <Link to={`categorias/${row.id}?action=edit`}><button><BsPencilSquare size={20} color="#0" /></button></Link>

        },
    ];

    return (
        <div>
            <Header />
            <div id="lista-categoria">
                <div className="table-filter">
                    <div className="table-title">
                        <p>Categorias</p>
                    </div>
                    <div className="table-search">
                        <input type="text" placeholder="Encontre uma categoria" />
                        <button><FiSearch size={18} color="#000000" /></button>
                        <div className="add">
                            <Link to={`categorias?action=novo`}><button><GrAddCircle size={20} color="#fff" /></button></Link>
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

export default ListaCategoria;